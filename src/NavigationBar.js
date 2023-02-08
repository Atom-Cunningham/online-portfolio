import React from "react";

// a navigation bar with behavior defined in bootstrap
// props: string id, string title, object[] menuItems
function NavigationBar(props){
    //resize on scroll and add scrollSpy, 
    //TODO: replace with a hook
    React.useEffect(()=>{
        navbarShrink();
        window.addEventListener("scroll", navbarShrink);
        //scrollSpy
        const navBarControl = document.createElement('script');
        navBarControl.src = 'js/scrollSpy.js';
        navBarControl.async = true;
        document.body.appendChild(navBarControl);
    },[]);
    //create list of menu items
    const menuItems = props.menuItems.map((obj,i)=> {
        return (<NavTarget key={i} title={obj.title} target={obj.target}/>);
    });
    return(
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id={props.id}>
            <div className="container">
                <a className="navbar-brand" href="#page-top">{props.title}</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// a jump-to link in the menu button dropdown
// props: target, title
function NavTarget(props){
    return(
        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" 
            href={props.target}>{props.title}</a>
        </li>
    );
}

// Navbar shrink function
function  navbarShrink() {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    //console.log(`collapsable ${navbarCollapsible}, scrollY ${window.scrollY}`);
    //console.log(navbarCollapsible.classList);
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }
};


export default NavigationBar;