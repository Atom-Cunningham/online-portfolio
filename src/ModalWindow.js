import React from 'react';
import IconDivider from './IconDivider';

// requires props id, title, image
function ModalWindow(props){
    return(
        <div className="portfolio-modal modal fade" id = {props.modalId} tabIndex="-1" aria-labelledby={props.id} aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <IconDivider title = {props.title}/>
                                    <img className="img-fluid rounded mb-5" src={props.image} alt="..." />
                                    <p className="mb-4">{props.text}</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModalWindow;