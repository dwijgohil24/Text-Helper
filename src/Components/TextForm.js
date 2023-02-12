import React from "react";
import {useState} from 'react'

export default function TextForm(props) {
  
  //converts the text to upper-case.

  const handleUpClick = () =>{
    //console.log("value is now set to upper case, enjoy !")
    let newText = text.toUpperCase();
    setText(newText);
  }

  //converts the text to lower-case.

  const handleDownClick = () =>{
    //console.log("value is now set to upper case, enjoy !")
    let newText = text.toLowerCase();
    setText(newText);
  }

  /*Extra Feature - Add On*/

  //extract the email-id from the text.
 
//let emailFetched="";
  const extractEmail = () =>{
    let currText = text.split(" ");
    
    for (let index = 0; index < currText.length; index++) {
      for (let j = 1; j < currText[index].length; j++) {

        if(currText[index][j] === "@"){
          emailFetched(currText[index]);
          console.log("mil gaya");
          console.log(currText[index]);
         } 
        //console.log(currText[index]);
      }
    }
    //return emailFetched;
  }
  //handling the input text.asasa
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  

  const[text,setText] = useState("");
  const[email,emailFetched] = useState("");
  //const[cnt,setCount] = useState(""); later we will implement this feature. (will calculate the number of words)

  return (
    <>
    <div className="container">
      <div className="mb-3">
      <h2>{props.heading}</h2>
        <textarea   
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
     </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={extractEmail}>
        Fetch Email-id.
      </button>
      </div>
      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <h6>Your Text contains {text.split(" ").length} and {text.length} characters.</h6>
        <h6>Approx time to read this text = {0.008 * text.split(" ").length} minutes. </h6>
        <h4>Preview :</h4>
        <p>{text}</p>
        
        
        <h4>Email Fetched Status : {email}</h4>
      </div>
      
    </>
  );
}
