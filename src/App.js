import React from 'react';
import './App.css';
import FadeIn from 'react-fade-in';

function App() {
  return (
    <div className="App">     
        <div className = "slide-right">
          <h1 className = "name">
            RP__Photography
          </h1>
        </div>
        <div className = "slide-left">
          <h2 className = "line">
            ________________________
          </h2>
        </div>
        <FadeIn delay = {3300} transitionDuration = {2000}>
          <button className ="enterButton">
            ENTER
          </button>
        </FadeIn>
    </div>
  );
}

export default App;
