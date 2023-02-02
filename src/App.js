import './App.css';
import React from "react";
import IconDivider from './IconDivider';
import ContactForm from './ContactForm.js';
import Portfolio from './Portfolio.js'


function App() {
  return (
    <div className="App">
      <Section class = "page-section portfolio" id="portfolio">
        <IconDivider title="Portfolio"/>
        <Portfolio/>
      </Section>
      <Section class="page-section" id="contact">
        <IconDivider title="Contact Me"/>
        <ContactForm/>
      </Section>
    </div>
  );
}

function Section(props){
  return(
    <section className = {props.class}  id = {props.id}>
      <div class = "container">
        {props.children}
      </div>
    </section>
  );
}

export default App;
