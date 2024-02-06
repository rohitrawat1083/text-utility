import React,{useState} from 'react'


export default function TextForm(props) {

   const handleOnclick=()=>{
         
         let newtext =  text.toUpperCase();
         setText(newtext);
         props.showAlert("Text is converted into Uppercase!","success");
         
        
     }

     const handlonClick=()=>{
      console.log("lower case is clicked");
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Text is converted into Lowercase!","success");
    

     }

    const handleOnchange=(event)=>{
        console.log("on change text");
        setText(event.target.value);
    }

    const handleOnCancel=()=>{
      let newtext= "";
      setText(newtext);
    }

    const handleCopy= ()=>{
      console.log("i am copy");
      var text = document.getElementById("Mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is coppied successfully!","success");

    }

    const RemoveExtraspace =()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra space has been removed!","success");
    }

    const[text,setText]=useState("Enter text here");
  return (
    <>
    <div className='container' > 

  <h1>{props.heading}</h1>
   <div className="mb-3">
    <textarea id="Mybox" className="form-control" rows="8" onChange={handleOnchange} value={text} style={{backgroundColor: props.mode==='dark'?'#281c78':'white'}}>hello</textarea>


    </div>
    <button className="btn btn-primary mx-2"  onClick={handleOnclick}>Converts into Uppercase</button> 
    <button className="btn btn-primary mx-2"  onClick={handlonClick}>Convert into Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>Click to copy</button>
    <button className='btn btn-primary mx-2' onClick={RemoveExtraspace}>Click to remove Extra space</button>
    
    <button className="btn btn-danger mx-2"  onClick={handleOnCancel}>Clear text</button>
   
  </div>
  <div className='contaner my-2'>
    <h1>Your text summary</h1>
    <p>You have entered {text.split(" ").length}words</p>
    <p>You have entered {text.length}characters</p>
    <p>You have read {.08*text.split(" ").length}minutes</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Please Enter Something"}</p>
  </div>
    </>
  )
}
