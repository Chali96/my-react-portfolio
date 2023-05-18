import { useState } from "react";


const Contact = () => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    setSubmittedMessage(`Name:  ${name} \n Email: ${email} \n Message: ${message}`)

    setName('');
    setEmail('');
    setMessage('');
  }

    return (
        <div className='container'>
            <form className="formtext" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="input"
                     type={name}
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                </label>
               <br/>
               <label>
                    Email:
                    <input className="input"
                     type={email}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
           <br/>
           <label>
                    Message:
                    <textarea className="input-msg"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

              <br/>
              <button className="btn-submit" type="submit">Submit</button>  
              </form>
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