import React from 'react';
import {Wrapper, HeaderCard, ContentCard, CardTitle, Table, SummaryContent, TemperatureContent, WindContent, CloudContent } from './cards.style';

function Cards({weatherData}) {
    let date = new Date(weatherData.weather.timestamp * 1000);

    return (
        <Wrapper>
            <HeaderCard>
                <h3> {weatherData.name}, {weatherData.country}</h3>
                <div>{date.toDateString()}</div>
            </HeaderCard>
            
            <ContentCard>
                <CardTitle>SUMMARY</CardTitle>
                <SummaryContent>
                    <Table>
                        <tr>
                            <td>Title</td>
                            <td> {weatherData.weather.summary.title}</td>
                        </tr> 
                        <tr>
                            <td> Description </td>
                            <td>{ weatherData.weather.summary.description}  </td>
                        </tr>
                    </Table>
                    <img id="summary-image" src={`http://openweathermap.org/img/wn/${weatherData.weather.summary.icon}@2x.png`}/> 
                </SummaryContent>
            </ContentCard>
            
            <ContentCard>
                <CardTitle>TEMPERATURE</CardTitle>
                <TemperatureContent>
                    <Table>
                        <tr>
                            <td>Min</td>
                            <td> {weatherData.weather.temperature.min}</td>
                            <td>Max</td>
                            <td> {weatherData.weather.temperature.max}</td>
                        </tr> 
                        <tr>
                            <td> Actual </td>
                            <td> {weatherData.weather.temperature.actual}  </td>
                            <td> Feels like</td>
                            <td> {weatherData.weather.temperature.feelsLike}   </td>
                        </tr>
                    </Table>
                </TemperatureContent>
            </ContentCard>
            
            <ContentCard>
                <CardTitle>WIND</CardTitle>
                <WindContent>
                    <Table>
                        <tr>
                            <td>speed</td>
                            <td> {weatherData.weather.wind.speed}</td>
                        </tr> 
                        <tr>
                            <td> deg   </td>
                            <td> {weatherData.weather.wind.deg}  </td>
                        </tr>
                    </Table>
                </WindContent>
            </ContentCard>
            
            <ContentCard>
                <CardTitle>CLOUDS</CardTitle>
                <CloudContent>
                    <Table>
                        <tr>
                            <td>Min</td>
                            <td> {weatherData.weather.clouds.all}</td>
                        </tr> 
                        <tr>
                            <td> Actual </td>
                            <td> {weatherData.weather.clouds.visibility} </td>
                        </tr>
                        <tr>
                            <td> Actual </td>
                            <td> {weatherData.weather.clouds.humidity}  </td>
                        </tr>
                    </Table>
                </CloudContent>
            </ContentCard>
        </Wrapper>
    );
}

export default Cards;