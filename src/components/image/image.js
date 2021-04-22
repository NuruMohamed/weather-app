import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 80%;
`;

function Image(props) {

    return (
        <>
           <Img src={props.image}/> 
        </>
    );
}

export default Image;