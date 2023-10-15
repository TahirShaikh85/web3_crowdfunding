import React from "react";
import ReactDOM from "react-dom/client";
import { Sepolia } from "@thirdweb-dev/chains";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider activeChain={Sepolia}>
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>
  </ThirdwebProvider>
);
