import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled successfully!", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled successfully!", "success")
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div class="container">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />}/>
          <Route path="/about"  element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
