import React from 'react';
import {Wrapper} from '../handleSearchResult/handleSearchResult.style';
import SearchResultUnavailable from '../searchResultUnavailable/searchResultUnavailable';

function HandleSearchResult(props) {
    return (
        <Wrapper>
            <SearchResultUnavailable/>
        </Wrapper>
    );
}

export default HandleSearchResult;