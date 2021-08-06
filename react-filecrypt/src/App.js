import React from "react";
import Comp from './Comp'
import FileUploadButton from './FileUploadButton'
// todo pick file button
//      download file

function App() {
  return (
    <React.Fragment>
      <div>
        <Comp />
      </div>
      <div><FileUploadButton/></div>
    </React.Fragment>
  )
}

export default App;
