import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    /* background-color: orange */
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Input = styled.input`
    width: 80%;
    min-height: 30px;
    border: 1px solid grey;
    border-right: 0px;
    border-radius: 5px 0px 0px 5px;
    &:focus {
        outline: none;
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
    width: 20%;
    padding: 0px;
    border: 1px solid grey;
    border-left: 0px;
    padding: 5px ;
    background-color: white;
    outline: none;
    border-radius: 0px 5px 5px 0px;
`;

export const Select = styled.select`
    border: 0px;
    outline: none;
`;

export const Option = styled.option`
    
`;

export const Label = styled.label`
    
`;