import React from 'react';

function SecondaryBanner(props) {
  

    return(
      <div className="banner-section"  >
      <div class="col-md-12">
        <div class="secondarybanner-box"  >
        <h4>Explore<br /> Our Residences</h4><br/>
        <a href="#" className="secondarybanner-btn" >More Info</a>
        </div>
      </div> 

     
      <div class="col-md-6">
        <div class="secondarybanner-box"  >
        <h4>Stay<br /> Entertained</h4><br/>
        <a href="#" className="secondarybanner-link" >See More </a>
        </div>
      </div> 
      <div class="col-md-6">
        
        <div class="secondarybanner-box"  >
        <h4>Explore<br /> The Hotel</h4><br/>
        <a href="#" className="secondarybanner-link" >See More</a>
        </div>
      </div>
      </div>
    );
  }
  export default SecondaryBanner;
