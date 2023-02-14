import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not.

  const toggleMode=() =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <div className="container">
      <TextForm heading = "Text Form Analyze" mode={mode}/>
      </div>

    </>
  );
}

export default App;
