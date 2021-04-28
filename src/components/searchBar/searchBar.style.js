import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 10%;
    
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90%;
    /* border: 1px solid orange; */
`;

export const Input = styled.input`
    width: 85%;
    border: 1px solid grey;
    border-right: 0px;
    border-radius: 10px 0px 0px 10px;
    padding-left: 10px;
    height: 100%;
    &:focus {
        outline: none;
    }

    @media(min-width: 601px) {
        border-radius: 15px 0px 0px 15px;
    }

    @media(min-width: 992px) {
        /* height: 30px; */
        width: 90%;
        border-radius: 10px 0px 0px 10px;
    }
`;

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 5px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border: 1px solid grey;
    border-left: 0px;
    padding: 5px ;
    background-color: white;
    outline: none;
    border-radius: 0px 10px 10px 0px;
    height: 100%;

    @media(min-width: 601px) {
        width: 15%;
        border-radius: 0px 15px 15px 0px;
    }
    @media(min-width: 992px) {
        /* height: 30px; */
        border-radius: 0px 10px 10px 0px;
        padding: 0px ;
        width: 10%;
    }
`;

export const Select = styled.select`
    border: 0px;
    outline: none;
`;

export const Option = styled.option`
    
`;
