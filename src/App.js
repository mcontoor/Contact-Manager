import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Karen Smith"
          email="karen@gmail.com"
          phone="333-333-3333"
        />
      </div>
    </div>
  );
}

export default App;
