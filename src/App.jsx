import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
//import About from './components/About'
import Alert from './components/Alert'
<Router basename="/Reactcourse"/>
/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/

function App() {
   const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })    
setTimeout(() => {
  setAlert(null);
}, 1500);
  }
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or light mode is enabled
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = '#042743'
      document.title = 'TextUtils - Dark Mode'
      /* setInterval(() => {
         document.title = 'TextUtils is amazing';
       }, 2000);
       setInterval(() => {
         document.title = 'Install TextUtils now';
       }, 1500);   */
    }
    else {
      setMode('light')
      showAlert("Light mode has been enabled", "success")
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
   // <Router>
    <>
     
   
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}> </Alert>   
      <div className="container my-3">
        {/*<Routes>
          {/* exact means you have to access the only link you required*/}
          {/*<Route exact path="/about" element={<About />} />
          <Route
            path="/"
            element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}
          />
        </Routes>*/}
        <Textform showAlert ={showAlert} heading="Enter the text to analyze below" mode={mode} /> 
        {/*<About />*/}
      </div>
      
    </>
   // </Router>
  )
}
export default App

  