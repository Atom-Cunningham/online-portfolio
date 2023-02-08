import React from "react";

// local components
import IconDivider from './IconDivider';
import NavigationBar from './NavigationBar';
import Masthead from './Masthead';
import Portfolio from './Portfolio.js'
import About from './About';
import ContactForm from './ContactForm.js';
import Footer from './Footer.js';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="App">
      {/*Navigation Bar*/}
      <NavigationBar id="mainNav" title="Adam Cunningham" 
                     menuItems = {[{ title: "Portfolio", target: "#portfolio"},
                                   { title: "About", target: "#about"},
                                   { title: "Contact", target: "#contact"}]}/>

      {/*Header*/}
      <Masthead image="assets/img/avataaars.svg" heading="Adam Cunningham" 
                subheading="Bachelor's of Science in Computer Science"/>
      
      {/*Portfolio*/}
      <Section id="portfolio" class = "page-section portfolio">
        <IconDivider title="Portfolio"/>
        <Portfolio/>
      </Section>
      
      {/*About Me*/}
      <Section id="about" class = "page-section bg-primary text-white mb-0">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <IconDivider light={true}/>
        <About/>
      </Section>
      
      {/*Contact*/}
      <Section id="contact" class="page-section" >
        <IconDivider title="Contact Me"/>
        <ContactForm/>
      </Section>
      
      <Footer/>
    </div>
  </React.StrictMode>
);

function Section(props){
  return(
    <section className = {props.class}  id = {props.id}>
      <div className = "container">
        {props.children}
      </div>
    </section>
  );
}

/*
const navBarControl = document.createElement('script');
navBarControl.src = 'js/navigationBarControl.js';
console.log(navBarControl.src);
navBarControl.async = true;
document.body.appendChild(navBarControl);

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


