import React, { useState } from 'react';
import {Wrapper} from '../handleSearchResult/handleSearchResult.style';
import SearchResultUnavailable from '../searchResultUnavailable/searchResultUnavailable';
import SearchResultAvailable from '../searchResultAvailable/searchResultAvailable';
import DataLoading from '../data-loading-animation/data-loading';
import FetchWeatherData from '../fetchWeatherData/fetchWeatherData';

function HandleSearchResult(props) {
    const [weatherData, setWeatherData] = useState({type: 'loading'});

    function handleRender() {
        if(weatherData.type == 'loading') {
            return <DataLoading/>;
        } else if (weatherData.type == 'none') {
            return <SearchResultUnavailable searchValue = {props.searchValue} />;
        } else if (weatherData.type == 'success') {
            return <SearchResultAvailable weatherData = {weatherData.data}/>;
        } else if (weatherData.type == 'error') {
            return weatherData.data.message;
        }
    }
    
    return (
        <Wrapper>
            {console.log(weatherData)}
            { handleRender() }
            <FetchWeatherData 
                searchValue = {props.searchValue}
                setWeatherData = {setWeatherData}
            />
        </Wrapper>
    );
}

export default HandleSearchResult;