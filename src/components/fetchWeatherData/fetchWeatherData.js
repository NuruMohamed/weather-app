import React from 'react';
import {gql, useQuery} from '@apollo/client';

const weatherDataQuery = gql`
    query fetchData($name: String  = "london") {
        getCityByName(name: $name) {
            id, 
            name, 
            country,
            coord {
              lon, lat
            },
            weather {
              summary {
                title, description, icon
              },
              temperature {
                actual, feelsLike, min, max
              },
              wind {
                speed, deg
              },
              clouds {
                all, visibility, humidity
              },
              timestamp
            }
            
          }
    }
`;

function FetchWeatherData(props) {
    const {loading, error, data} = useQuery(weatherDataQuery, 
        {
            variables: {
                name: props.searchValue
            }
        });

    if(loading) props.setWeatherData({type: 'loading'}); //console.log("loading");
    else if(error) props.setWeatherData({type: 'error', data: error}); //console.log("erroor");
    else if(data.getCityByName) props.setWeatherData({type: 'success', data: data.getCityByName});
    else props.setWeatherData({type: 'none'});
    console.log('Fetch data>> test')
    return null;
}

export default React.memo(FetchWeatherData);