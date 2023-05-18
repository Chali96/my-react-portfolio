import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from "./components/Footer"
import Header from './components/Header';
import Modal from './components/Modal';
import { useState } from 'react';


function App() {
  const [status, setStatus] = useState(false);
  
  return (
<BrowserRouter>
<div className='container-modal'>
  {status && (
    <Modal close={() => setStatus(false)}>
      <div className='container-modal'>
        <p>Hey, I hope you have a beautiful day today!</p>
      </div>
    </Modal>
  )}
<button onClick={() => setStatus(true)} className="btn">For you!</button>
</div>
<Header />
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/about' element={<About/>} />
</Routes>
<Footer />
</BrowserRouter>
  );
}

export default App;
