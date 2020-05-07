import React, { useState } from 'react';
import './App.css';

function App() {

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [dotX, setDotX] = useState(null);
  const [dotY, setDotY] = useState(null);

  const upload_image = (e) => {
    console.log(e.target.files[0]);
    const [file] = e.target.files;
    if (file) document.getElementById("picture").src = window.URL.createObjectURL(file);
  }

  const get_coordinate = (e) => {
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.offsetY);
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
    setDotX(e.nativeEvent.clientX);
    setDotY(e.nativeEvent.clientY)
  }

  const contentMenuStyle = {
    display: dotX & dotY ? 'block' : 'none',
    position: 'absolute',
    left: dotX ? dotX : 0,
    top: dotY ? dotY : 0
  };

  return (
    <div className="App">
      <input type="file" id="file" className="mt-5 mb-5" accept="image/*" onChange={upload_image}></input>
      <div className="d-flex align-items-center justify-content-center">
        <p className="mr-3">X: {X}</p>
        <p>Y: {Y}</p>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <img id="picture" onClick={get_coordinate}>
        </img>
        <div className="point" style={contentMenuStyle}>
        </div>
      </div>
    </div>
  );
}

export default App;
