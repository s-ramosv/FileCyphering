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
  };  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };  return (
    <>
      <button>
      <img className = {button_styles.button} onClick = {handleClick} src={MyImage} alt="my image" />
      </button>
      <input
        type="file"
        ref = {hiddenFileInput}
        onChange = {handleChange}
        style = {{display: 'none'}} /* Make the file input element invisible */
      />
    </>
  );
}
export default FileUploadButton;  
