import Menu from './Components/Menu';

import Footer from './Components/Footer';

import Rotas from './rotas';

import {BrowserRouter} from 'react-router-dom';

import {Container, fluid} from 'react-bootstrap';

import './App.css';

 function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
      </header>
      <main>
        <Container fluid>
          <Rotas />
        </Container>
      </main>
        <footer> <Footer /> </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
