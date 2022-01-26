import React from 'react';
import NavBar from './component/navBar/NavBar';
import "./App.css"
import Banner from './component/Banner/Banner';
import RowPost from './component/RowPost/RowPost';
import {Action,Originals} from './url'
import axios from 'axios';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner />
    <RowPost url={Originals} title='Netflix Originals' />
    <RowPost url={Action} title='Action' isSmall />
    </div>
  );
}

export default App;
