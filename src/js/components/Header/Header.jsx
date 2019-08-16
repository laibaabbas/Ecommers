import React from "react";
import { Link } from "react-router-dom";

$('.carousel').carousel({
  interval: 500
})

const Header = (props) => {
  const categories=props.nav[0].Categories.map((v,i)=>{
    return(
      <li key={i} class="market-list"><Link className="list-item" to={`/${v.item}`}>{v.item} <hr/> </Link>  </li>
      // <li key={i} className=" market-list"><a href="#" className="list-item">{v.item} <hr/> </a> </li>

    )
  })
  return (
    <div id="header">
      <div className="container bg-white h-100">
        <div className="row py-2 h-100">
          <div className="col-6">
            <div className="contant ">
              <div className="text-center">
                <h2>Your Market</h2>
              </div>
              <ul className="market ">
                {categories}
              </ul>

              
            </div>
          </div>
          <div className="col-6">
          <div id="carouselExampleIndicators" class="carousel slide h-100" data-ride="carousel">
  <ul class="carousel-indicators ">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ul>
  <div class="carousel-inner h-100">
    <div class="carousel-item active h-100">
      <img src="https://i.alicdn.com/img/tfs/TB1oQgfbhD1gK0jSZFsXXbldVXa-990-400.jpg" class="d-block w-100 h-100" alt="..."/>
    </div>
    <div class="carousel-item h-100">
      <img src="https://i.alicdn.com/img/tfs/TB1eR_BbUT1gK0jSZFrXXcNCXXa-990-400.jpg" class="d-block w-100 h-100 " alt="..."/>
    </div>
    <div class="carousel-item h-100">
      <img src="https://i.alicdn.com/img/tfs/TB14GwiXp67gK0jSZPfXXahhFXa-990-400.jpg" class="d-block w-100 h-100" alt="..."/>
    </div>
    <div class="carousel-item h-100">
      <img src="https://s.alicdn.com/@img/tfs/TB1xPGPboz1gK0jSZLeXXb9kVXa-990-400.jpg" class="d-block w-100 h-100" alt="..."/>
    </div>
    <div class="carousel-item h-100">
      <img src="https://i.alicdn.com/img/tfs/TB1hTnabAL0gK0jSZFtXXXQCXXa-990-400.jpg" class="d-block w-100 h-100 " alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

          </div>
        </div>
      </div>
   


      
    </div>
  );
};

export default Header;
