import { useState } from 'react';
import Home from '../home/home';
import SearchResult from '../searchResult/search-result';
import styled from 'styled-components';


const state = "search-result";
const Wrapper = styled.div`
  font-family: 'Roboto';
  height: 100%; 
  background-color: ${ () => state=="search-result"? "rgba(0,0,0,0.1)" : "white"};
`;


function App() {
  let [searchValue, setSearchValue] = useState(false);
  console.log("app: ",searchValue);
  return (
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
  );
}

export default App;
