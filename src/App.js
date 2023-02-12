import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
      <TextForm heading = "Text Form Analyze"/>
      </div>

    </>
  );
}

export default App;
