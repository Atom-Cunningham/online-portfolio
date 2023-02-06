import React from 'react';
import IconDivider from './IconDivider';

function ModalWindow(props){
    // requires props id, title, image
    console.log("reading the value of props.modalId as" + props.modalId);
    return(
        <div class="portfolio-modal modal fade" id = {props.modalId} tabindex="-1" aria-labelledby={props.id} aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <IconDivider title = {props.title}/>
                                    <img class="img-fluid rounded mb-5" src={props.image} alt="..." />
                                    <p class="mb-4">{props.text}</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
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