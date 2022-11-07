import { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");

  const handleUpText = () => {
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoText = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopyText = () => {
    var copyText = document.getElementById("my-box");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleCaptitalizeText = () => {
    var splitStr = text.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    setText(splitStr.join(" "));
    props.showAlert("Capitalized successfully", "success");
  };

  const handleSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }



  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 >{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="my-box"
            rows="8"
            style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
        <button disabled={text.length === 0} onClick={handleUpText} className="btn btn-primary mx-1 my-1">
          Convert To Uppercase
        </button>
        <button disabled={text.length === 0} onClick={handleLoText} className="btn btn-primary mx-1 my-1">
          Convert To Lowercase
        </button>
        <button disabled={text.length === 0} onClick={handleClearText} className="btn btn-primary mx-1 my-1">
          Clear Text
        </button>
        <button disabled={text.length === 0} onClick={handleCopyText} className="btn btn-primary mx-1 my-1">
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCaptitalizeText}
          className="btn btn-primary mx-1"
        >
          Capitalize Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleSpaces}
          className="btn btn-primary mx-1"
        >
          Remove Extra Spaces
        </button>
      </div>

      <div style={{color: props.mode==='dark'?'white':'black'}} className="container my-3">
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Please Enter Some Text to Preview it"}</p>
      </div>
    </>
  );
}



export default Textform;
