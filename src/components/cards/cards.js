import React from 'react';
import {Wrapper, HeaderCard, ContentCard, CardTitle, Table, SummaryContent, TemperatureContent, WindContent, CloudContent } from './cards.style';

function Cards(props) {

    return (
        <Wrapper>
            <HeaderCard>
                <h3> Adama, ET</h3>
                <div>Monday</div>
            </HeaderCard>
            
            <ContentCard>
                <CardTitle>SUMMARY</CardTitle>
                <SummaryContent>
                    <Table>
                        <tr>
                            <td>Cloud</td>
                            <td> 20.3</td>
                        </tr> 
                        <tr>
                            <td> Few Clouds </td>
                            <td> 20.3  </td>
                        </tr>
                    </Table>
                    <img id="summary-image" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                </SummaryContent>
            </ContentCard>
            
            <ContentCard>
                <CardTitle>TEMPERATURE</CardTitle>
                <TemperatureContent>
                    <Table>
                        <tr>
                            <td>Min</td>
                            <td> 20.3</td>
                            <td>Max</td>
                            <td> 20.3</td>
                        </tr> 
                        <tr>
                            <td> Actual </td>
                            <td> 20.3  </td>
                            <td> Feels like </td>
                            <td> 20.3  </td>
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
                            <td> 21</td>
                        </tr> 
                        <tr>
                            <td> deg   </td>
                            <td> 20.3  </td>
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
                            <td> 20.3</td>
                        </tr> 
                        <tr>
                            <td> Actual </td>
                            <td> 20.3  </td>
                        </tr>
                        <tr>
                            <td> Actual </td>
                            <td> 20.3  </td>
                        </tr>
                    </Table>
                </CloudContent>
            </ContentCard>
        </Wrapper>
    );
}

export default Cards;