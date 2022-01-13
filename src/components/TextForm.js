import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase Btn was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Uppercase Btn has been clicked','success');
    }
    const handleLowClick = ()=>{
        console.log("Lowercase Btn was clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Lowercase Btn has been clicked','success');
    }
    // const handleCopyClick = ()=>{
    //     console.log("Copied Btn was clicked")
    //     navigator.clipboard.writeText(text);
    // }
    const handleClearClick = ()=>{
        console.log("Clear Btn was clicked")
        setText('');
        props.showAlert('Clear Text Btn has been clicked','success');
    }
    // const handleRandomWordClick = ()=>{
    //     console.log("Random Line Btn was clicked")
    //     let array = text.split("\n");
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     setText(array.join("\n"));
    // }
    // const handleTextEncoderClick = ()=>{
    //     console.log("Encoder Btn was clicked")
    //     setText(text);
    // }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    return (
        <>
        <div className='container my-3' style={{ color: props.mode === 'light'?'dark':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-2">
                <textarea className='form-control' placeholder='Enter Text Here' value={text}  style = {{backgroundColor: props.mode=== 'dark'?'grey':'white', color:props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
            {/* <button className='btn btn-primary mx-2 my-1' onClick={handleCopyClick}>Copy to Clipboard</button> */}
            <button className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
            {/* <button className='btn btn-primary mx-2 my-1' onClick={handleRandomWordClick}>Random Line</button> */}
            {/* <button className='btn btn-primary mx-2 my-1' onClick={handleTextEncoderClick}>Text Encoder</button> */}
        </div>

        <div className="container my-3" style={{ color: props.mode === 'light'?'black':'white'}}>
            <h1>Text Summary</h1>
            <p>{text.length} character and {text.split(" ").length} words</p>
            <p> {0.008* text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: 'Enter something in the above textbox to preview it here'}</p>
        </div>

        </>
    )
}
