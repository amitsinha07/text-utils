import {useState} from 'react'

function Textform(props) {
    const [text, setText] = useState("Enter text");

    const handleUpText = () => {
        let newText = text.toUpperCase(text);
        setText(newText);
    }

    const handleOnChange = (e) =>{
        setText(e.target.value);
    }




  return (
    <>
      <h2>{props.heading}</h2>
      <div className='mb-3'>
        <textarea className='form-control' onChange={handleOnChange} value={text} id="my-box" rows="8"></textarea>
      </div>
      <button onClick={handleUpText} className='btn btn-primary'>Convert To Uppercase</button>
    </>
  );
}

export default Textform;
