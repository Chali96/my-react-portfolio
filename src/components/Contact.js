import { useState } from "react";


const Contact = () => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefaulr();


    setSubmittedMessage(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)

    setName('');
    setEmail('');
    setMessage('');
  }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                     type={name}
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                </label>
               <br/>
               <label>
                    Email:
                    <input
                     type={email}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
           <br/>
           <label>
                    Message:
                    <textarea
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

              <br/>
              <button type="submit">Submit</button>  
              </form>

            <h3>
                
            </h3>
        </div>
    );
};

export default Contact;