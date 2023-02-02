import React from "react";

function IconDivider(props){
    return(
        <div>
            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{props.title}</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        </div>
        
    );
}
export default IconDivider;