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
  return (
    <Wrapper className="App">
      {/* <Home/> */}
      <SearchResult/>
    </Wrapper>
  );
}

export default App;
