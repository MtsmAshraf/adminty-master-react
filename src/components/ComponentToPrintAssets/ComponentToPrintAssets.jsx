import React from "react";

class ComponentToPrintAssets extends React.Component {
    render() {
      return (
        <div style={{position: "absolute", zIndex: "-1"}}>
          <h2 style={{color: "green"}}>Attendance</h2>
          <h1>
            PrintAssetsComponent
          </h1>
        </div>
      );
    }
  }
  
  export default ComponentToPrintAssets;