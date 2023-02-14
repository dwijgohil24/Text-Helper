import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from 'react';
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=() =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark-Mode is Enabled !","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark-Mode is Disabled !","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container">
      <TextForm showAlert = {showAlert} heading = "Text Form Analyze" mode={mode}/>
      </div>

    </>
  );
}

export default App;
