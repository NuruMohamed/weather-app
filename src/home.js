import weather from './weather-animate.svg';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: orange; */
    max-width: 80%;
    margin-right: 0px;
`;

const Home = () => {

    return (
        <Div>
            {/* <img src={weather}/> */}
            <div>Weather</div>
        </Div>
    );
}

export default Home;