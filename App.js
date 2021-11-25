import React from "react";
import { Main } from "./views/Main";
import { ProductDetail } from "./views/ProductDetail";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductUpdate } from "./Components/ProductUpdate";

function App() {

  
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ProductDetail path="/product/:id"/>
        <ProductUpdate path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
