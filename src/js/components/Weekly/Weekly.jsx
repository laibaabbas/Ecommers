import React, { Component } from 'react';

class Weekly extends Component {
    
  render() {
    const deals=this.props.weekly[0].cards.map((v,i)=>{
        return(
            <div key={i} className="card col-lg-2 py-2">
            <img className="card-img-top" src={v.img} alt="" sizes="" srcset=""/>
              <div className="card-text prices">
                  <span className="discount">{v.discount} %</span>
                  <span>{v.prise} </span>
              </div>
            </div>
        )
    })

    return (
      <div id="weekly" className="my-5"> 
          <div className="container ">
             
                  <h4 className="line font-weight-bold text-uppercase">{this.props.weekly[0].heading} </h4>
             
              <div className="row bg-white">
                  {deals}
               
                    
                  
              </div>
          </div>
           </div>
    );
  }
}

export default Weekly;
