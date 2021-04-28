import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 70%;

    @media(min-width: 992px) {
        width: 50%;
    }
`;

function Image(props) {

    return (
        <>
           <Img src={props.image}/> 
        </>
    );
}

export default Image;