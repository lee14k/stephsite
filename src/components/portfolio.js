import React from "react"
import Port1 from "../images/sheiseport1.png"
import Port2 from "../images/sheiseport2.png"
import Port3 from "../images/sheiseport3.png"
import Port4 from "../images/sheiseport4.png"
import Port5 from "../images/sheiseport5.PNG"
import Port6 from "../images/sheiseport6.PNG"
import './portfolio.css'



function Portfolio() {
    return (
  <div>

 


  <section className="main-content">
  
  <div className="portfolio">
     <div className="portfolio-item medium">
<img src={Port1} />

     </div>
     <div className="portfolio-item medium">
<img src={Port4} />

     </div>

     <div className="portfolio-item large two">
     <img src={Port2} />

     </div>

 

     <div className="portfolio-item large">
     <img src={Port3} />

     </div>

     <div className="portfolio-item tall">
     <img src={Port5} />

     </div>

     <div className="portfolio-item tall">
     <img src={Port6} />
     </div>

     <div className="portfolio-item wide">
   

     </div>

     </div>




</section>
  </div>
  
  
    );
  }

  export default Portfolio;
