import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');   // dark or light
  const [color, setColor] = useState(null);    // palette color, e.g. 'primary'

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Dark mode switch: only changes the mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils';
    }
  };

  // Palette: only changes the color (click the same color again to clear it)
  const changeColor = (cls) => {
    setColor(color === cls ? null : cls);
  };

  // Applies the background whenever mode or color changes
  useEffect(() => {
    document.body.classList.remove('bg-primary', 'bg-danger', 'bg-success', 'bg-warning'); {/* remove all palette classes */}
    if (color) {
      document.body.classList.add('bg-' + color);
    } else {
      document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white';
    }
  }, [mode, color]);

  return (
    <Router basename={import.meta.env.BASE_URL}> {/* basename is used to set the base URL for the router, useful for deployment on GitHub Pages */ }
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        changeColor={changeColor}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<Textform showAlert={showAlert} heading="Try TextUtils - WordCount, Character, Remove Text, Count Syllables" mode={mode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;