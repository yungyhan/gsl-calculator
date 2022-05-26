import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <p>You're a peer, looking around.</p>
        <Button
          onClick={() => {
            window.open(
              "https://www.youtube.com/channel/UCK5eBtuoj_HkdXKHNmBLAXg",
              "_blank"
            );
          }}
          variant="secondary"
        >
          Watch GSL here
        </Button>
      </header>
    </div>
  );
}

export default App;
