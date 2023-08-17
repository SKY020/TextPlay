import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked :" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","sucess");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked :" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","sucess");
    }

    const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText = ("new text"); //Correct way to change the state

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","sucess");
    }
    return (
      <>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#384269" }}
        >
          <h1 className="mb-4">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{
                background: props.mode === "dark" ? "#13466e" : "white",
                color: props.mode === "dark" ? "white" : "#384269",
              }}
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoClick}
          >
            Convert to LowerCase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "#384269" }}
        >
          <h1>Your Text summary</h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} charcters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </>
    );
}
