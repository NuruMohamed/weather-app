import { useState } from 'react';
import Home from '../home/home';
import SearchResult from '../searchResult/search-result';
import styled from 'styled-components';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com/',
  cache: new InMemoryCache()
});

const state = "search-result";
const Wrapper = styled.div`
  font-family: 'Roboto';
  height: 100%; 
  background-color: ${ () => state=="search-result"? "rgba(0,0,0,0.1)" : "white"};
`;


function App() {
  let [searchValue, setSearchValue] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Wrapper className="App">
      { searchValue? 
          <SearchResult 
            handleSearchValue={setSearchValue} 
            searchValue= {searchValue}
            /> 
          : 
          <Home 
            handleSearchValue={setSearchValue}
            /> }
    </Wrapper>
    </ApolloProvider>
  );
}

export default App;
