import React, {useState} from 'react';
function TextForm(props) {
    const [text,setText] = useState("");
    function handleChange(event){
        setText(event.target.value);
    }
    const handleUpClick= ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase successfully!", "success");
    }
    const handleLowClick= ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase successfully!", "success");
    }
    const handleClearClick =()=>{
        setText("");
        props.showAlert("Text cleared successfully!", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRange();
        props.showAlert("Copied to Clipboard successfully!", "success");
    }
    const handleExtraSpaces = () => {
        setText(text.trim().split(/\s+/).join(" "));
        props.showAlert("Extra spaces removed successfully!", "success");
    }
    return (
        <>
        <div className="container mb-3 my-3">
            <label for="textInp" className="form-label">Enter your text here!</label>
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? '#13466e': 'white', color:props.mode=== 'dark'?'white': '#042743'}} id="textInp" value={text} onChange={handleChange} rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container">
            <h2>Your text summery</h2>
            <p>{text.split(" ").filter(item=>item.length>0).length} Words and {text.length} Characters.</p>
            <p>{0.008 * text.split(" ").filter(item=>item.length>0).length} Minutes read.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

export default TextForm