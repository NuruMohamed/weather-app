import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Wrapper = styled.div`
    width: 100%;    
    img {
        width: 100%;
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,0.5); 
    }

   
`;

function GoogleMaps({coord: { lat, lon}}) {
    let mapHeight = useMediaQuery('(max-width: 600px)');
    const url = `https://maps.googleapis.com/maps/api/staticmap?size=900x${mapHeight? 180 : 130}&zoom=10&markers=color:red%7C${lat},${lon}&key=AIzaSyC9z-i2g5RgCVF80eUbeCZsrzbnN0csu8M`;

    return (
        <Wrapper>
            <img src={url}/>
        </Wrapper>
    );
}

export default GoogleMaps;