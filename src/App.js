import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='#384269';
      showAlert("Dark mode has been enabled","sucess");
      // document.title='TextUtils - Dark Mode'

      //Title repeation
      // setInterval(() => {
      //   document.title = 'TextUtils is Best Interface to manipulate text'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 2100);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","sucess");
      // document.title='TextUtils - Light Mode'
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutTextUtils="About"/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          {/* exact is to match exactly the same */}
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
          </Route>
        </Switch>
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
