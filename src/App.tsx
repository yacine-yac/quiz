import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import './App.css';
import './Global-style.css'
import Start from './start';
import Area from './Area';
import ErrorBoundary from './Area/ErrorBoundary'; 
function App() {
  return (
  <>
    <header></header>
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />}/> 
        <Route path="/quiz" element={<ErrorBoundary><Area /></ErrorBoundary>  }/> 
      </Routes> 
    </div>
  </>
  );
}

export default App;
