import React from "react";

const Footer = (props) => {
  const columnes=props.foot[0].columes.map((v,i)=>{
    const list=v.ul.map((v,i)=>{
      return(
        <li key={i}><a href="#">{v.list} </a></li>
      )
    })
    return(
      
      <div key={i} class="col-md-3 ">
          <h4>{v.title} </h4>
          <p> {v.adress[0]} <br/> {v.adress[1]}
          </p><ul class="colorlib-footer-links">
            {list}
       
          </ul>
          <p></p>
          </div>
    )
    
  })
  return <div id="footer">
    <div className="container-fluid bg-dark text-white py-5">
      
        <div className="text-center ">
          <h6>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</h6>
          <form class="form-inline d-flex justify-content-center align-content-end py-3 ">
          <input type="email" class="form-control " id="inputPassword2" placeholder="Your Email"/>
      
        <button type="submit" class="btn btn-outline-light ml-3">SUBMIT</button>
        
            </form>
            <p className="text-secondary"> 
        We’ll never share your email address with a third-party.
        </p>
        </div>

       <div className="container">
       <div className="row">
         {columnes}
      
        </div>
        <div className="text-center mt-3">
          <p>Copyright ©2019 All rights reserved</p>
        </div>
       </div>
       
      
    </div>
  </div>;
};

export default Footer;
