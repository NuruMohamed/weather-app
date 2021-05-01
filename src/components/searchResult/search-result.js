import React from 'react';
import {Wrapper} from './search-result.style';
import SearchBar from '../searchBar/searchBar';
import HandleSearchResult from '../handleSearchResult/handleSearchResult';
import Footer from '../footer/footer';

function SearchResult(props) {

    return (
        <Wrapper>
            <SearchBar/>
            <HandleSearchResult/>
            <Footer/>
        </Wrapper>
    );
}

export default SearchResult;