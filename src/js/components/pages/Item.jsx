import React, { Component } from 'react'

export default class Items extends Component {
  render() {
    return (
        <div  className=" col-md-3  rounded-lg" >
        <div className="my-4 card bg-white px-4 products ">
       <a href="#">
       <img className="card-img-top py-2" style={{height:"240px"}} src={this.props.img} alt=""/>
       
        <p class="card-text text-dark py-2">{this.props.title} </p>
        <h6 className="font-weight-bolder text-dark card-title ">{this.props.price} </h6>
        <div className="card-text mb-2 text-dark">
       {this.props.quntity}
        </div>
        </a>
       
        </div>
    </div>
    )
  }
}
