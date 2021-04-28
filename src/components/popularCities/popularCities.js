import React from 'react';
import {Wrapper, Title, CitiesWrapper, City, MinMax, RightBlock, LeftBlock} from './popularCities.style';

function PopularCities(props) {


    return (
        <Wrapper>
            <Title>Popular Cities </Title>
            <CitiesWrapper>
                <City>
                    <LeftBlock>
                        <MinMax> Max <br/> 300 </MinMax>
                        <MinMax> Min <br/> 200 </MinMax>
                        
                    </LeftBlock>
                    <RightBlock>
                        Addis Ababa <br/>
                        Cloud
                    </RightBlock>
                </City>

                <City>
                    <LeftBlock>
                        <MinMax> Max <br/> 300 </MinMax>
                        <MinMax> Min <br/> 200 </MinMax>
                        
                    </LeftBlock>
                    <RightBlock>
                        Addis Ababa <br/>
                        Cloud
                    </RightBlock>
                </City>

                <City>
                    <LeftBlock>
                        <MinMax> Max <br/> 300 </MinMax>
                        <MinMax> Min <br/> 200 </MinMax>
                        
                    </LeftBlock>
                    <RightBlock>
                        Addis Ababa <br/>
                        Cloud
                    </RightBlock>
                </City>
            </CitiesWrapper>
        </Wrapper>
    );
}

export default PopularCities;