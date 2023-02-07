import React from "react";

const text = [
    `Adam Cunningham is a Computer Scientist open to work.
     He is comfortable using a variety of languages and 
     technologies, and is always excited to learn new ones.`,
    
     `Adam is looking to join a team or organization to gain
     practical experience in the software development industry.
     He is also open at this time to freelance offers.`
];

// props: id
function About(props){
    return(    
        <div className="row">
            <div className="col-lg-4 ms-auto"><p className="lead">{text[0]}</p></div>
            <div className="col-lg-4 me-auto"><p className="lead">{text[1]}</p></div>
        </div>
    );
}

export default About;