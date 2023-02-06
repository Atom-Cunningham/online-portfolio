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

    //<ModalWindow id={obj.modalId} title={obj.title} image={obj.image} text={obj.text} />
    render(){
        //create a list of PortfolioItems
        const itemProps = this.state.itemProps;
        const items = itemProps.map((obj)=> {
            console.log(obj);
            console.log("reading the value of props.modalId in portfolio as" + obj.modalId);
            return( <Fragment key={obj.id}>
                        <PortfolioItem  target={obj.target} image={obj.image}/>
                        <ModalWindow modalId={obj.modalId} title={obj.title} image={obj.image} text={obj.text} />
                    </Fragment> );
        });
        
        return(
            <div class = "row justify-content-center">
                {items}
            </div>
        );
    }
}

function PortfolioItem(props){
    return(
        <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={props.target}>
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src={props.image} alt="..." />
            </div>
        </div>
    );
}

export default Portfolio;