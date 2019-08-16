import React, { Component } from "react";
import { Route } from "react-router-dom";


import { Nav as Mav } from "./Nav/Nav";

import Footer from './Footer/Footer';
import Home from '../components/Home/Home';
import Machinery from "../components/pages/Machinery/Machinery";
import Fabrication from "../components/pages/Fabrication/Fabrication";
import Furniture from "../components/pages/Furniture/Furniture"
import Contruction from "../components/pages/Construction/Construction";
import Electronics  from "../components/pages/Electonics/Electroics";
import ToolsHardware from "../components/pages/Tools_Hardware/Tools_Hardware"

import Data from "./Data"

class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        data:Data

        }
    }
   
    // machinery={this.state.data[0].MachineData} 
  render() {
    
    return (
      <div className="app">
       
        <Mav nav={this.state.data[0].nav}/>
        <Route path="/" exact component={Home} />
        <Route  path="/Machinery" component={Machinery} />
        <Route  path="/Fabrication Service" component={Fabrication} />
        <Route  path="/Furniture" component={Furniture} />
        <Route  path="/Contruction" component={Contruction} />
        <Route path="/Electronics" component={Electronics}/>
        <Route path='/Tools & Hardware' component={ToolsHardware}/>
        
        <Footer  foot={this.state.data[0].footer}/>


      
      </div>
    );
  }
}
export default App;
