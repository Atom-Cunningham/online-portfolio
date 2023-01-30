import './App.css';
import './ContactForm.js';
import IconDivider from './IconDivider';
import ContactForm from './ContactForm.js';


function App() {
  console.log("rendering App...");
  return (
    <div className="App">
      <section className="page-section" id="contact">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <IconDivider/>
        <ContactForm/>
      </section>
    </div>
  );
}

export default App;
