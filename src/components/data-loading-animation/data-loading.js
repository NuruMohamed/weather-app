import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%; 
    padding: 10px;
`;
    const Block = styled.div`
        height: ${props => props.h};
        width: 100%;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.1);
        animation-name: data-loading;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: ease-out;

        @keyframes data-loading {
            from {
                background-color: rgba(0,0,0,0.02);;
            }
            to {
                background-color: rgba(0,0,0,0.15);
            }
        }
    `;
function DataLoading(props) {

    return (
        <Wrapper>
            <Block h="20%"></Block>
            <Block h="10%"></Block>
            <Block h="15%"></Block>
            <Block h="15%"></Block>
            <Block h="15%"></Block>
            <Block h="15%"></Block>   
        </Wrapper>
    );
}

export default DataLoading;