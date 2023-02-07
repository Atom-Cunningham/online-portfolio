import React from "react";
import IconDivider from "./IconDivider";

// masthead goes at the top of the screen
// props: image, heading, subheading
function Masthead(props){
    return(
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={props.image} alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">{props.heading}</h1>
                <IconDivider light={true}/>
                <p className="masthead-subheading font-weight-light mb-0">{props.subheading}</p>
            </div>
        </header>
    );
}

export default Masthead;