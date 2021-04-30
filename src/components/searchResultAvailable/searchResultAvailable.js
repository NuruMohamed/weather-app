import React from 'react';
import {Wrapper, Content} from './searchResultAvailable.style';
import GoogleMaps from '../googleMaps/googleMaps';

function SearchResultAvailable(props) {
    return (
        <Wrapper>
            <GoogleMaps/>
        </Wrapper>
    );
}

export default SearchResultAvailable;