import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List.js';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </BrowserRouter>
  );
};

export default App;