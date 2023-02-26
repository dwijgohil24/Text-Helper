import React from "react";
import {useState} from 'react'
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'

export default function TextForm(props) {
  
  //converts the text to upper-case.

  const handleUpClick = () =>{
    //console.log("value is now set to upper case, enjoy !")
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length > 0){
      props.showAlert("Text Converted to Upper-Case","success");
    }
    else{
      props.showAlert("There Is No Text For Conversion", "danger");
    }
    
  }

  //converts the text to lower-case.

  const handleDownClick = () =>{
    //console.log("value is now set to upper case, enjoy !")
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length > 0){
      props.showAlert("Text Converted to Lower-Case","success");
    }
    else{
      props.showAlert("There Is No Text For Conversion", "danger");
    }    
  }

  const emptyText = () =>{
    let nTxt = "";
    setText(nTxt);
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
    <div className="container" style={{color : props.mode === 'light'? 'black' : 'white'}}>
      <div className="mb-3" >
      <h2>{props.heading}</h2>
      <GrammarlyEditorPlugin clientId="client_ApDXL3TVXQMNHQudsRf52S">
        <textarea   
          className="form-control"
          value={text}
          style={{backgroundColor: props.mode ==='light'? 'white':'black',
        color: props.mode === 'light' ? 'black' : 'green'}}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        </GrammarlyEditorPlugin> 
     </div>
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert To Upper-Case
      </button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
        Convert To Lower-Case
      </button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={emptyText}>
        Clear Text
      </button>      
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={extractEmail}>
        Fetch Email-id.
      </button>

      </div>
      <div className="container my-3" style={{color : props.mode === 'light'? 'black' : 'white'}}>
        <h4>Your Text Summary</h4>
        <h6>Your Text contains {text.split(" ").filter((element) => {return element.length!==0}).length} word and {text.length} characters.</h6>
        <h6>Approx time to read this text = {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes. </h6>
        <h4>Preview :</h4>
        <p>{text.length > 0 ? text : "Enter Something To Preview !"}</p>
        
        
        <h4>Email Fetched Status :</h4> 
        <p>{email.length > 0 ? email : "No Email-Id In The Text."}</p>
        
      </div>
      
    </>
  );
}
