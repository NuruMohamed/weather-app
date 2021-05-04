import React from 'react';
import {Wrapper, Content} from './searchResultAvailable.style';
import GoogleMaps from '../googleMaps/googleMaps';
import Cards from '../cards/cards';

function SearchResultAvailable(props) {
    return (
        <Wrapper>
            <GoogleMaps/>
            <Cards/>
        </Wrapper>
    );
}

export default SearchResultAvailable;