import React from 'react';

import evImage1 from '../../.wordpress-cache/wp-content/uploads/2021/05/workshop.png'
import evImage2 from '../../.wordpress-cache/wp-content/uploads/2021/05/events.png'

function Eventscard() {
    return(

        
        <div class="eventcard-section">
        <div class="cardColor">
        <div class="flex-container">        

        <div class="col-md-4" >   
        <div class="eventcard-box">
            <img src={evImage1} alt="" />
            <div class="eventcard-content">
            <div class="col-md-3">
            <h3 class="text">12</h3>
            <h6>Nov</h6>
            </div>
             <div class="col-md-9">
            <h4>Pop-up Florist Workshop</h4>
            <h5>Level</h5>
            <h6>7:00 PM - 8:30 PM</h6>
            <a>View Event</a>
            </div>
            </div>
        </div>
        </div>

        <div class="col-md-4" >   
        <div class="eventcard-box">
            <img src={evImage2} alt="" />
            <div class="eventcard-content">
            <div class="col-md-3">
            <h3 class="text">14</h3>
            <h6>Nov</h6>
            </div>
             <div class="col-md-9">
            <h4>The Happiest Hour At Kiwi</h4>
            <h5>Level</h5>
            <h6>7:00 PM - 8:30 PM</h6>
            <a>View Event</a>
            </div>
            </div>
        </div>
        </div>

        <div class="col-md-4" >   
        <div class="eventcard-box">
            <img src={evImage1} alt="" />
            <div class="eventcard-content">
            <div class="col-md-3">
            <h3 class="text">19</h3>
            <h6>Nov</h6>
            </div>
             <div class="col-md-9">
            <h4>Cannuka Beauty Event at Nieman Marcus</h4>
            <h5>Level</h5>
            <h6>7:00 PM - 8:30 PM</h6>
            <a>View Event</a>
            </div>
            </div>
        </div>
        </div>

        </div>
        </div>
        </div>
    );

}
export default Eventscard;