import weather from './weather-animate.svg';
import styled from 'styled-components';
import {Wrapper, Title} from './home.style.js';
import Image from '../image/image';
import SearchBar from '../searchBar/searchBar';
import PopularCities from '../popularCities/popularCities';
import Footer from '../footer/footer';


const Home = () => {

    return (
        <Wrapper id="lll">
            <Image image={weather}/>
            <Title>Weather</Title>
            <SearchBar/>
            <PopularCities/>
            <Footer/>
        </Wrapper>
    );
}

export default Home;