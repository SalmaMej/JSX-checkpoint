import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import avatar2 from "./avatar-2.png"


function App() {
  return (
    <React.Fragment>
    <div className='center' style={{border:'solid 1 black', maxWidth: "100vw" }}>
      <h1 className='title red'>Salma Mejdouba</h1>
      <br></br>
      <img src={avatar2} alt='avatar2'></img>
      <br ></br>
      <img src={'hands.jpg'} alt='hands' style={{width:250}}></img>
    </div>
      <video className='video' src={'nature.mp4'} style={{width:320, height:240}} controls></video>
    </React.Fragment>
  );
}

export default App;
