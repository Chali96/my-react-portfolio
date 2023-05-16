import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from "./components/Footer"

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/about' element={<About/>} />
</Routes>
      <Home />
      <Contact />
      <About />
      <Footer />
</BrowserRouter>
  );
}

export default App;
