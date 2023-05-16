import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from "./components/Footer"
import Header from './components/Header';
import Index from './index.css'


function App() {
  return (
<BrowserRouter>
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
