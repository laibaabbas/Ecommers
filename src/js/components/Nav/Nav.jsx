import React from "react";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  console.log(props.nav[0])
  const categories=props.nav[0].Categories.map((v,i)=>{
    return(
      <li key={i} class="nav-item"><Link className="text-dark" to={`/${v.item}`}>{v.item}</Link>  </li>
      // <li key={i} class="nav-item"><a class="text-dark" href="#"> {v.item} </a>  </li>
      
    )
  })
  return (
    <div>
       <div>
      <nav className="navbar navbar-expand-lg navbar-white  bg-white ">
    <div className="container-fliud w-100">
            <div className="row w-100 sticky-top bg-white py-2">
                <div className="col-md-2 col-12">
                        <button className="navbar-toggler ml-sm-5" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="display-6">MENU</span>
                              </button>
                              <Link to="/"> Start Bootstrap </Link>
                        {/* <a className="navbar-brand " href="#">Start Bootstrap</a> */}
                </div>
                <div className="col-md-7 col-11">
                  <div className="input-group "  style={{"font-size":"11px" ,}}>
                    <div className="input-group-prepend">
                      <button className="btn green-btn dropdown-toggle" 
                     
                      type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Products</a>
                        <a className="dropdown-item" href="#">Suppliers</a>
                      
                      </div>
                    </div>
                    <input type="text" className="form-control "
                   
                     placeholder="What Are you Looking for...?" aria-label="Text input with dropdown button"/>
                    <div className="input-group-append">
                      <button className="btn search-btn " type="button">Search</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-1"></div>
            </div>
           

          
                <div id="menu" className="d-flex text-secondary">
                <hr/>
                        <div className="categories  ">
                            
                                <a className="nav-link text-secondary" href="#">
                                  <i className="fa fa-navicon mx-2"></i>
                                   Categories 
                                   <i className="fa fa-angle-down mx-2"></i>
                                </a>
                                <ul class="submenu ">
                               
                              {categories}
                                  </ul>
                                

                            </div>
                            <div className="py-2">|</div>
                             
                             <div className="collapse navbar-collapse" id="navbarResponsive">
                                     <ul className="navbar-nav px-3 ">
                                       <li className="nav-item active">
                                         <a className="nav-link text-secondary" href="#">Ready to Ship
                                      
                                         </a>
                                       </li>
                                       <li className="nav-item">
                                         <a className="nav-link text-secondary " href="#">trade Shows</a>

                                       </li>
                                       <li className="nav-item " id="services">
                                         <a className="nav-link text-secondary " href="#">Services <i className="fa fa-angle-down mx-2"></i></a>
                                         <ul className="submenu2">
                                  <li class="nav-item"> <a class="text-dark d-flex" href="#"><img src="./images/TB1gBp7SSzqK1RjSZPcXXbTepXa-40-40.png" alt=""/> <span>Trade Assurance</span></a></li>
                                  <li class="nav-item"> <a class="text-dark d-flex" href="#"><img src="./images/TB1gBp7SSzqK1RjSZPcXXbTepXa-40-40.png" alt=""/> <span>Trade Assurance</span></a></li>
                                  <li class="nav-item"> <a class="text-dark d-flex" href="#"><img src="./images/TB1gBp7SSzqK1RjSZPcXXbTepXa-40-40.png" alt=""/> <span>Trade Assurance</span></a></li>
                                  
                                  </ul>
                                       </li>
                                       <li className="nav-item " id="membership">
                                         <a className="nav-link text-secondary " href="#">Membership <i className="fa fa-angle-down mx-2"></i></a>
                                         <ul className="submenu2">
                                  <li class="nav-item"> <a class="text-dark d-flex" href="#"> <span>Buyer Business Identity</span></a></li>
                                  <li class="nav-item"> <a class="text-dark d-flex" href="#"> <span>Supplier Membership</span></a></li>
                               
                                  </ul>
                                       </li>
                                     </ul>
                                   </div>
                </div>
          
    </div>
</nav>
   </div>
    </div>
  );
};

// export default Nav;
