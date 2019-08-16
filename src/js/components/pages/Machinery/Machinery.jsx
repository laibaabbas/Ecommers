import React, { Component } from 'react';
import Data from "../../Data";
import Items from "../Item"
export default class Machinery extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:Data
    }
  }
  
  render() {

    var machinery=this.state.data[0].MachineData
  
    let cards=machinery[0].items.map((v,i)=>{
      return( <Items key={i}
      img={v.img}
title={v.title}
       price={v.price}  
       />)
    })
    console.log(machinery[0].items[0],'Not today')
    
    return (
      <div id="machinery">
      
       <div className="breadcrumb bg_image"  style={{backgroundImage:`url(${machinery[0].header[0].bg_image})`}}>
         <h1>{machinery[0].header[0].title} </h1>
       </div>
       <div id="costly" className="my-5"> 
          <div className="container ">
             <div className="row">
   

              
                 {cards}
             </div>
                  
          </div>
           </div>
      
              
      </div>
    )
  }
}
