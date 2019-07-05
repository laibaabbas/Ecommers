import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import { Nav as Mav } from "./Nav/Nav";
import DigitalMarketing from "./pages/DigitalMarketing/Digital";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Mav />

        <Route path="/digital-marketing-sem" component={DigitalMarketing} />
      </div>
    );
  }
}
export default App;
