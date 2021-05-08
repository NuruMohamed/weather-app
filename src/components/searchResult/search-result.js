import React from 'react';
import {Wrapper} from './search-result.style';
import SearchBar from '../searchBar/searchBar';
import HandleSearchResult from '../handleSearchResult/handleSearchResult';
import Footer from '../footer/footer';

function SearchResult(props) {

    return (
        <Wrapper>
            <SearchBar 
                handleSearchValue={props.handleSearchValue}
                searchValue= {props.searchValue}
            />
            <HandleSearchResult
                searchValue= {props.searchValue}
            />
            <Footer/>
        </Wrapper>
    );
}

export default SearchResult;