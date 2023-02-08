import React from "react";

// footer, contains location, social media, and website info
//
function Footer(props){
    return( 
        <div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Atlanta, Georgia
                            </p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            {/*<a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>*/}
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            {/*<a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>*/}
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelance</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created 
                                by <a href="http://startbootstrap.com">bootstrap</a>. This site has been
                                entirely rewritten as a <a href="https://reactjs.org/">React app</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <Copyright/>
        </div>
        
    );
}

function Copyright(props){
    return(
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Your Website 2023</small></div>
        </div>);
}

export default Footer;
