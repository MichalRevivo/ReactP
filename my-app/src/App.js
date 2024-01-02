import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Nav } from './Components/Nav';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Components/Routing';
import { Provider } from 'react-redux';
import { Footer } from './Components/footer';
import { MyStore } from './Redux/Stor';
import { HomePage } from './Components/HomePage';
function App() {
  return (
    <div className="App">
        <Provider store={MyStore}>

      <BrowserRouter>
  <Nav></Nav>
  {/* <Footer></Footer> */}
  <Routing></Routing>
  </BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
