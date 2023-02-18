import React from "react";

const ShowAlertComponent = () => {
  const showAlert = () => {
    alert("I'm an alert");
  }

  const showConsole = () => {
    console.log("hello this is handler function 2- message");
  }

  return (
    <div>
  <button onClick={showAlert}>Show alert</button>
  <button onClick={showConsole}>Show Console</button>
    </div>

  )

}

export default ShowAlertComponent;