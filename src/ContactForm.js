const React = require("react");

class ContactForm extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    async handleSubmit(){
        const nameField = this.state.name;
        const emailField = this.state.email;
        const phoneField = this.state.phone;
        const messageField = this.state.message;
        let details = {
            name: nameField,
            email: emailField,
            phone: phoneField,
            message: messageField,
        };
        console.log("sending post request");
        let response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        let result = await response.json();
        alert(result.status);
    };

    render(){
        this.handleSubmit();
        return(
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">
                    <form id="contactForm">
                        <InputField id= "name"
                                    type= "name"
                                    placeholder= "Enter your name..."
                                    label= "Full name"
                                    errorMessage= "A name is required." />
                        <InputField id= "email"
                                    type= "email"
                                    placeholder= "name@example.com"
                                    label= "Email address"
                                    errorMessage= "A valid email address is required." />
                        <InputField id= "phone"
                                    type= "tel"
                                    placeholder= "(123) 456-7890"
                                    label= "Phone number"
                                    errorMessage= "A phone number is required." />
                        <InputField id= "message"
                                    type= "text"
                                    placeholder= "Enter your message here..."
                                    label= "Message"
                                    errorMessage= "A message is required." />
                    </form>
                </div>
            </div>
        );
    }
}

function InputField(props){
    return(
        <div className="form-floating mb-3">
            <input className="form-control" id= {props.id} type= {props.type} placeholder= { props.placeholder }/>
            <label htmlFor={ props.id }> {props.label} </label>
            <div className="invalid-feedback">{props.errorMessage}</div>
        </div>
    );
}

export default ContactForm;