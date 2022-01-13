import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000034';
      showAlert('Dark mode has been enabled','success');
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
    <Router>
    <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode= {toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading='Enter the text to analyse' mode={mode} showAlert={showAlert}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
