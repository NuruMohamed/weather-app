import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 4%;
    /* border: 1px solid grey; */

    @media (min-width: 992px) {
        width: 40%;
        background-color: white;
        /* padding-top: 1%;  */
        padding: 15px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
`;