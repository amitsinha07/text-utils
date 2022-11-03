import { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("Enter text");

  const handleUpText = () => {
    let newText = text.toUpperCase(text);
    setText(newText);
  };

  const handleLoText = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpText} className="btn btn-primary">
          Convert To Uppercase
        </button>
        <button onClick={handleLoText} className="btn btn-primary mx-2">
          Convert To Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;
