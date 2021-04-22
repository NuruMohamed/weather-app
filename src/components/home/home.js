import weather from './weather-animate.svg';
import styled from 'styled-components';
import {Wrapper, Title} from './home.style.js';
import Image from '../image/image';
import SearchBar from '../searchBar/searchBar';


const Home = () => {

    return (
        <Wrapper>
            <Image image={weather}/>
            <Title>Weather</Title>
            <SearchBar/>
        </Wrapper>
    );
}

export default Home;