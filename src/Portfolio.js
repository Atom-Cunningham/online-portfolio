import React, { Fragment } from 'react';
import ModalWindow from './ModalWindow.js';
import {data} from './PortfolioData.js';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemProps: [],
        };
        this.state.itemProps = data;
    }

    render(){
        //create a list of PortfolioItems
        const itemProps = this.state.itemProps;
        const items = itemProps.map((obj)=> {
            return( <Fragment key={obj.id}>
                        <PortfolioItem  target={obj.target} image={obj.image}/>
                        <ModalWindow modalId={obj.modalId} title={obj.title} image={obj.image} text={obj.text} />
                    </Fragment> );
        });
        
        return(
            <div className = "row justify-content-center">
                {items}
            </div>
        );
    }
}

// an image which has an onclick defined in bootstrap,
// which toggles props.target modal box aria show property
function PortfolioItem(props){
    return(
        <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={props.target}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={props.image} alt="..." />
            </div>
        </div>
    );
}

export default Portfolio;