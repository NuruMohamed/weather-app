import Home from '../home/home.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Roboto';
  height: 100%;

  
    
`;

function App() {
  return (
    <Wrapper className="App">
      <Home/>
    </Wrapper>
  );
}

export default App;
