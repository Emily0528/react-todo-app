import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;