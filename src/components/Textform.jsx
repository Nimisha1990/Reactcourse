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
    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleCountSyllables = ()=>{
        let syllableCount = text.split(/\s+/).filter((e) => { return e.length !== 0; }).length;
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
        <h1 className='mb-4' style={{'fontsize': '15px'}}>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text}id="myBox" rows="8" onChange={(e) => setText(e.target.value)} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>  
</div>
<button disabled={text.trim().length == 0} className="btn btn-primary my-3 mx-1 my-1" onClick={handleUpClick} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Convert to Uppercase</button>
<button disabled={text.trim().length == 0} className="btn btn-primary my-3 mx-1 my-1" onClick={handleLowcase} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Convert to Lowercase</button>
<button disabled={text.trim().length == 0} className="btn btn-primary my-3 mx-1 my-1" onClick={handleRemoveText} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Remove Text</button>
<button disabled={text.trim().length == 0} className="btn btn-primary my-3 mx-1 my-1" onClick={handleCountSyllables} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Count Syllables</button>
<button disabled={text.trim().length == 0} className="btn btn-primary my-3 mx-1 my-1" onClick={handleCopyText} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Copy Text</button>



    </div>
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 > Your Text Summary</h2>
        <p>
            {text.split(/\s+/).filter((e) => { return e.length !== 0; }).length} words and {text.length} characters {/* /\s+/ matches one or more whitespace characters,  */}
        </p>
        <p>
            {0.008 * text.split(/\s+/).filter((e) => { return e.length !== 0; }).length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.trim().length > 0 ? text : "Nothing to preview"}</p>
    </div>
</> 
  );
}