import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 30%;
    /* border: 1px solid grey; */
    
`;

    export const Title = styled.div`
        margin-bottom: 10px;
    `;

    export const CitiesWrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        height: 60%;
        width: 100%;
    `;

        export const City = styled(CitiesWrapper)`
            box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.16);
            border-radius: 10px;
            width: 30%;
            height: 100%;
            font-size: 12px;
            @media(max-width: 601px) {
                width: 50%;
                height: 100%;
            }
        `;

            export const LeftBlock = styled.div`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-top: 10px;
                padding-bottom: 10px;
                border-radius: 10px;
                width: 30%;
                height: 100%;
                background-image: linear-gradient(rgb(0,100,47) 50%, #13E3EB);
                @media(min-width: 992px) {
                    width: 25%;
                }
            `;
                export const MinMax = styled.div`
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    color: white;
                `;
            export const RightBlock = styled.div`
                display: flex;
                flex-direction: column;
                
                width: 70%;
                /* border: 1px solid orange; */
            `;

            