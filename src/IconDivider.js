import React from "react";

function IconDivider(props){
    var style = "divider-custom";
    if(props.light){
        style += " divider-light"
    }
    return(
        <div>
            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{props.title}</h2>
            <div className={style}>
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        </div>
        
    );
}
export default IconDivider;