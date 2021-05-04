import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    height: 80%;

    @media(min-width: 768px) and (max-width: 991px) {
        justify-content: space-between;
        height: 80%;
    }
`;

    export const HeaderCard = styled.div`
        display:flex;
        justify-content: space-between;
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        h3 {
            margin: 0px;
        }

        @media(min-width: 992px) {
            box-shadow: 0px 1px 3px grey;
        }
    `;

    export const ContentCard = styled.div`
        display:flex;
        flex-direction: column;
        margin-top: 5px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 6px;

        @media(min-width: 768px) and (max-width: 992px) {
            height: 20%;
            padding: 15px;
        }

        @media(min-width: 992px) {
            box-shadow: 0px 1px 3px grey;
        }
    `;

        export const CardTitle = styled.div`
            
        `;

        export const Table = styled.table`
            min-width: 60%;
            /* tr, td {
                border: 1px solid yellow;
            } */
        `;

        export const SummaryContent = styled.div`
            display: flex;
            align-items: center;
            width: 100%;
            margin-top: 5px;
            
            #summary-image {
                width: 50px;

                @media(min-width: 768px)  and (max-width: 992px) {
                    width: 100px;
                }
            }
        `;

        export const TemperatureContent = styled.div`
            margin-top: 5px;
            table {
                min-width: 100%;
            }
        `;
        
        export const WindContent = styled.div`
            margin-top: 5px;
        `;

        export const CloudContent = styled(WindContent)`

        `;


