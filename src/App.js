import NavComp from './components/NavComp'
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About'
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 1500)
}
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <BrowserRouter>
      <NavComp mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={
          <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>}
        />
        <Route path="about" element={<About mode={Mode}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
