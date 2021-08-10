import React from 'react';
import MyImage from './art/dec.jpg';
import button_styles from './styledButton.module.css';
//import Button from './styledButton.css';


const FileUploadButton = props => {  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = event => {
    const file = event.target.files[0];
    if (!file) return
    const reader = new FileReader()
    reader.onload = function(file) {
      // e.target points to the reader
      // const textContent = e.target.result
      var arrayBuffer = reader.result;
      
      console.log(arrayBuffer);
      var i = 0;
      arrayBuffer[0] =+ 5;
      for(;i<14;i++) console.log(arrayBuffer[i]);

        
      ////create a blob with the modified buffer
      //var uploadBlob = new Blob(arrayBuffer);
      //var uploadData = new FormData(),
      //  request = null;

      //upload.append('fileData', uploadBlob);
      
      //request = new XMLHttpRequest();
      //request.open("POST", "http://yourURL.com");
      //request.send(formData);
      //console.log(`The content of ${file.name} is ${textContent}`)
    }
    reader.onerror = (e) => {
      const error = e.target.error
      console.error(`Error occured while reading ${file.name}`, error)
    }
    reader.readAsArrayBuffer(file)
    //reader.readAsText(file)
  }
  return (
    <>
      <img className = {button_styles.button} onClick = {handleClick} src={MyImage} alt="my image" />

      <input
        type="file"
        id="inputElement"
        ref = {hiddenFileInput}
        onChange = {handleChange}
        style = {{display: 'none'}} // Make the file input element invisible 
      />
    </>
  );
}
export default FileUploadButton;  

