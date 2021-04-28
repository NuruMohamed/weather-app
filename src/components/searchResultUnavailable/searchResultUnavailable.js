import React from 'react';
import {Wrapper, Content} from './searchResultUnavailable.style';
import MoodBadIcon from '@material-ui/icons/MoodBad';

function SearchResultUnavailable(props) {
    return (
        <Wrapper>
            <Content>
                <MoodBadIcon 
                    style={ {
                        width: 100, 
                        height: 100, 
                        color: "rgba(0,0,0,0.5)"
                        }}/>
                <div>sorry, we couldn't find test</div>
                <div>make sure you spelled it correctly</div>
            </Content>
        </Wrapper>
    );
}

export default SearchResultUnavailable;