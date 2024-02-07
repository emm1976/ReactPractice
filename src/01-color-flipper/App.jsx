import React from 'react';
import './App.css'

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

export default function App () {

  const [color, setColor] = React.useState("#f1f5f8") 

  function btnClick () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    setColor(colors[randomNumber])
  };
  
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }

  return (
    <div className='App'>
      <nav>
        <div className='nav-center'>
          <h4>color flipper</h4>
          <ul className='nav-links'>
            <li>
              <a href='index.html'>simple</a>
            </li>
            <li>
              <a href='hex.html'>hex</a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className='container'>
          <h2>
            background color : <span className='color'>{color}</span>
          </h2>
          <button type="button" className='btn btn-hero' onClick={btnClick}>
            click me
          </button>
        </div>
      </main>
    </div>
  )
}
