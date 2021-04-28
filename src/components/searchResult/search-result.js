import React from 'react';
import {Wrapper} from './search-result.style';
import SearchBar from '../searchBar/searchBar';
import HandleSearchResult from '../handleSearchResult/handleSearchResult';


function SearchResult(props) {

    return (
        <Wrapper>
            <SearchBar/>
            <HandleSearchResult/>
        </Wrapper>
    );
}

export default SearchResult;