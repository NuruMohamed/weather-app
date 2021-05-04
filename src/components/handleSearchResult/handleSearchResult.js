import React from 'react';
import {Wrapper} from '../handleSearchResult/handleSearchResult.style';
import SearchResultUnavailable from '../searchResultUnavailable/searchResultUnavailable';
import SearchResultAvailable from '../searchResultAvailable/searchResultAvailable';
import DataLoading from '../data-loading-animation/data-loading';

function HandleSearchResult(props) {
    return (
        <Wrapper>
            {/* <SearchResultUnavailable/> */}
            {/* <SearchResultAvailable/> */}
            <DataLoading/>
        </Wrapper>
    );
}

export default HandleSearchResult;