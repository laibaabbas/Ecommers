import React, { Component } from 'react';
import Header from '../Header/Header';
import Weekly  from '../Weekly/Weekly';
import Recommend from '../Recommend/Recommend';
import Data from "../Data"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data:Data
  
          }
      }
  render() {
    return (
      <div className="app">
            <Header nav={this.state.data[0].nav} />
        <Weekly weekly={this.state.data[0].weekly} />
        <Recommend  recommend={this.state.data[0].Recommend}/>
      </div>
    )
  }
}
