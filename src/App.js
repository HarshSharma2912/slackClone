import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';

import { useEffect } from 'react';
import HomeContent from './components/readMore/homeContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {



  return (
    <div className="App container">
     
      
       <Header />
            <HomeContent />
    </div>
  );
}

export default App;
