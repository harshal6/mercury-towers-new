import React from "react"

function Headingcontent(props) {
    return(
        <div class="Headingcontent">        
        <div class="col-md-6 col-md-offset-6 p-0">
            <h2 class="mb-4">{props.heading}</h2>
            <p>{props.description}</p>
        </div>

        </div>
    );

}
export default Headingcontent