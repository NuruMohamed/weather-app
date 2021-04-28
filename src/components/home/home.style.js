import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width:70%;
    margin-left: auto;
    margin-right: auto;
    /* border: 1px solid grey; */

    @media(min-width: 992px) {
        width: 40%;
        /* border: 1px solid grey; */
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 34px;
    color: #414141;
`;