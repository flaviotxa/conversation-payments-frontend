import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AtlasSdk from "@atlas/sdk";

async function start() {
  await AtlasSdk.connect();

  ReactDOM.render(<App />, document.getElementById("root"));
}

start().catch(console.error);
