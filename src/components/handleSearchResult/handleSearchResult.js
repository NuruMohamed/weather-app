import React from 'react';
import {Wrapper} from '../handleSearchResult/handleSearchResult.style';
import SearchResultUnavailable from '../searchResultUnavailable/searchResultUnavailable';
import SearchResultAvailable from '../searchResultAvailable/searchResultAvailable';

function HandleSearchResult(props) {
    return (
        <Wrapper>
            <SearchResultUnavailable/>
            {/* <SearchResultAvailable/> */}
        </Wrapper>
    );
}

export default HandleSearchResult;