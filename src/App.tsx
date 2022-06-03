import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { MatchTable } from "./MatchTable";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <MatchTable />
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
