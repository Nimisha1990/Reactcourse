import React, {useState} from 'react'
 
export default function Textform(props) {
    const [text, setText] = useState(' '); // text is a state variable and setText is a function to update the state variable
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowcase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleRemoveText = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text removed!", "success");
    }
    const handleCountSyllables = ()=>{
        let syllableCount = text.split(" ").filter((e) => { return e.length !== 0; }).length;
        setText(`Syllables: ${syllableCount}`);
        props.showAlert(`Syllables: ${syllableCount}`, "info");
    }
     const onChange = ()=>{
        //console.log("Text was changed");
        setText(target.value);
    }
    // text = "new text"; //wrong way to set the value of text
    //setText("new text"); //correct way to set the value of text
  return (
    <>
    <div className ="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text}id="myBox" rows="8" onChange={(e) => setText(e.target.value)} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>  
</div>
<button className="btn btn-primary my-3 mx-1" onClick={handleUpClick} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Convert to Uppercase</button>
<button className="btn btn-primary my-3 mx-1" onClick={handleLowcase} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Convert to Lowercase</button>
<button className="btn btn-primary my-3 mx-1" onClick={handleRemoveText} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Remove Text</button>
<button className="btn btn-primary my-3 mx-1" onClick={handleCountSyllables} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Count Syllables</button>



    </div>
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 > Your Text Summary</h2>
        <p>
            {text.split(" ").filter((e) => { return e.length !== 0; }).length} words and {text.length} characters
        </p>
        <p>
            {0.008 * text.split(" ").filter((e) => { return e.length !== 0; }).length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.trim().length > 0 ? text : "Enter text to preview"}</p>
    </div>
</> 
  );
}