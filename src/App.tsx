import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import './App.css';
import './Global-style.css'
import Component from './components';
import Start from './start';
import Demo from './demo'; 
import Result from './result';
function App() {
  return (
  <>
    <header></header>
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />}/> 
        <Route path="/quiz" element={<Component />}/> 
      </Routes> 
         {/* <Demo /> */}
         {/* <Result /> */}
    </div>
  </>
  );
}

export default App;
