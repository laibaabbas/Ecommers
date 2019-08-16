import React, { Component } from 'react';
import Data from "../../Data";
import Items from "../Item"
export default class Furniture extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:Data
    }
  }
  
  render() {

    var innerdata=this.state.data[0].fabrication
  
    let cards=innerdata[0].items.map((v,i)=>{
      return( <Items key={i}
      img={v.img}
      quntity={v.quntity}  
       price={v.price}  
       />)
    })
    console.log(innerdata[0].items[0],'Not today')
    
    return (
      <div id="machinery">
      
       <div className="breadcrumb bg_image"  style={{backgroundImage:`url(${innerdata[0].header[0].bg_image})`}}>
         <h1 className="text-light">{innerdata[0].header[0].title} </h1>
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
