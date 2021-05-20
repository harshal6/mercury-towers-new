import React from 'react';
import cardone from '../../.wordpress-cache/wp-content/uploads/2021/05/food-image.png'
import cardtwo from '../../.wordpress-cache/wp-content/uploads/2021/05/shop-image.png'
import cardthree from '../../.wordpress-cache/wp-content/uploads/2021/05/see-image.png'

function Categorycard() {
    return(

        
        <div class="card-section">
        <div class="cardColor">

        <div class="flex-container">        

        <div class="col-md-4" >   
        <div class="cardBox">
            <img src={cardone} alt="" />
            <div class="cardcontent">
            <h3 class="text">Food & Drink</h3>
            <p>Essentially Delicious</p>
            </div>
        </div>
        </div>

        <div class="col-md-4" >   
        <div class="cardBox">
        <img src={cardtwo} alt="" />
            <div class="cardcontent">
            <h3 class="text">Shop</h3>
            <p>Always on trend</p>
            </div>
        </div>
        </div>

        <div class="col-md-4" >   
        <div class="cardBox">
        <img src={cardthree} alt="" />
            <div class="cardcontent">
            <h3 class="text">See & Do</h3>
            <p>Inspiration Everywhere</p>
            </div>
        </div>
        </div>

        </div>
        </div>
        </div>
    );

}
export default Categorycard;