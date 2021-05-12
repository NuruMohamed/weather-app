import React from 'react';
import {Wrapper, Content} from './searchResultUnavailable.style';
import MoodBadIcon from '@material-ui/icons/MoodBad';

function SearchResultUnavailable(props) {
    return (
        <Wrapper>
            <Content>
                <MoodBadIcon 
                id="icon"
                    style={ {
                        width: 80, 
                        height: 80, 
                        color: "rgba(0,0,0,0.5)"
                        }}/>
                <div>sorry, we couldn't find <b>{props.searchValue} </b> </div>
                <div>make sure you spelled it correctly</div>
            </Content>
        </Wrapper>
    );
}

export default SearchResultUnavailable;