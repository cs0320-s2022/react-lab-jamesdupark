import React, {useState} from 'react';
import logo from './logo.svg';
import Horoscope from './Horoscope';
import TextBox from './TextBox';
import './App.css';
//@ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function App() {
  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("");
  const [rising, setRising] = useState("");

  //TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
const [horoscope, setHoroscope] = useState([]);

const requestHoroscope = () => {
  const toSend = {
      //TODO: Pass in the values for the data. Follow the format the route expects!
      sun: sun,
      moon: moon,
      rising: rising
  };

  let config = {
      headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
      }
  }

  //Install and import axios!
  //TODO: Fill in 1) location for request 2) your data 3) configuration
  axios.post("http://localhost:4567/horoscope", toSend, config)
  .then(response => {
      console.log(response.data);
      //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
      //Note: It is very important that you understand how this is set up and why it works!
      setHoroscope(response.data['horoscope']);
  })
  .catch(error => {
      console.log(error);
  });
}

  return (
    <div className="App">
      <header className="App-header">
        <Horoscope title={'Horoscope'} name={'Aries'}/>
        <TextBox id={'sun'} label={'sun'} change={setSun}/>
        <TextBox id={'moon'} label={'moon'} change={setMoon}/>
        <TextBox id={'rising'} label={'rising'} change={setRising}/>
        <AwesomeButton onPress={requestHoroscope}>
          submit!
        </AwesomeButton>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
          {horoscope.map((x: string) => {return <p>trait: {x}</p>})}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
