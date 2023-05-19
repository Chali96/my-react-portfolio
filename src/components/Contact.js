import { useState } from "react";


const Contact = () => {
  // this is the state variabless for name, email, message and submitted message 
  const [name, setName] = useState ('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

 // set the submitted message with a form a data
    setSubmittedMessage(`Name:  ${name} \n Email: ${email} \n Message: ${message}`)

    // reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  }

    return (
        <div className='container'>
          {/*FORM */}
            <form className="formtext" onSubmit={handleSubmit}>
                <label>
                  {/*the name input */}
                    Name:
                    <input className="input"
                     type={name}
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                </label>
               <br/>
               <label>
                {/* the email input */}
                    Email:
                    <input className="input"
                     type={email}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
           <br/>
           <label> {/* message input */}
                    Message:
                    <textarea className="input-msg"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

              <br/>
              <button className="btn-submit" type="submit">Submit</button>  
              </form>
              {/*the button for submitting */}
              {submittedMessage && (
                <div className="submit-msg"> 
                    <h3>Thank you for your Message!</h3>
                    <p>{submittedMessage}</p>
                </div>
              )}
        </div>
    );
};

export default Contact;

