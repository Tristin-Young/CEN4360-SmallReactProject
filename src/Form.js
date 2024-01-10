// Form handling
import "./Form.css";
import { useState } from "react";

function Form() {

    // controlled components for the form fields (name, email, zip code)
    // these are the values that will be submitted with the form
    // once they are submitted, the fields should be cleared
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [zip, setZip] = useState("");

    // because the above fields are going to be cleared after submission
    // we need to keep track of the values that were submitted
    // this is what the following three states are for
    const [submittedName, setSubmittedName] = useState("");
    const [submittedEmail, setSubmittedEmail] = useState("");
    const [submittedZip, setSubmittedZip] = useState("");

    // function to handle the form submission
    // the parameter e is the event object
    const submit = (e) => {
        // prevent the default form submission behavior
        e.preventDefault();
        // set the submitted values to the current values of the controlled components
        setSubmittedName(name);
        setSubmittedEmail(email);
        setSubmittedZip(zip);
        //alert the user of their inputs
        alert(`Name: ${name}\nEmail: ${email}\nZip Code: ${zip}`);
        // clear the controlled components
        setName("");
        setEmail("");
        setZip("");
    };

    // function to call back the last set of submitted values
    const recall = () => {
        alert(`Name: ${submittedName}\nEmail: ${submittedEmail}\nZip Code: ${submittedZip}`);
    };

    // return the form element
    //each input has an onChange event handler that updates the corresponding state
    //the submit button has an onClick event handler that calls the submit function
    //the recall button has an onClick event handler that calls the recall function
    return (
        <form class="form">
            <label for="name">Name: </label>
            <input
                id="name"
                value={name}
                type="text"
                placeholder="John Doe"
                onChange={(event) => setName(event.target.value)}
            />
            
            <label for="email">Email:</label>
            <input
                id="email"
                value={email}
                type="text"
                placeholder="johndoe123@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
            />
            <label for="zip">Zip Code:</label>
            <input
                id="zip"
                value={zip}
                type="text"
                placeholder="12345"
                onChange={(event) => setZip(event.target.value)}
            />
            <button onClick={submit}>Register</button>
            <button onClick={recall}>Recall</button>
            
        </form>

    );


}

// export the Form component
export default Form;