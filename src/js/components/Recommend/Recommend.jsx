import React, { Component } from 'react';

class Recommend extends Component {
  render() {
    const  card=this.props.recommend[0].cards.map((v,i)=>{
          return(
            <div key={i} className=" col-md-3  " >
            <div className="my-4 card bg-white px-4 products">
           <a href="#">
           <img className="card-img-top py-2" src={v.img} alt=""/>
           </a>
           
            <p class="card-text">{v.decription} </p>
            <h6 className="font-weight-bolder card-title">{v.price[0]}-{v.price[1]} </h6>
            <div className="card-text mb-2">
           {v.quntity}
            </div>
            </div>
        </div>
          )
      })
    return (
      <div id="recommend">
          <div className="container ">
          <h4 className="line font-weight-bold"> RECOMMENDATIONS FOR YOU </h4>
          <div className="row my-2">
            {card}
          </div>


          </div>
          
           </div>
    );
  }
}

export default Recommend;
