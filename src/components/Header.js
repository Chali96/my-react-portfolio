import header from './images/header.jpeg';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
     <div className="container">
          <div className='navbar'>
          <Link className='btntext' to="/contact">
            
            <button className='navbtn'>Contact me</button>
           </Link>  
           <Link className='btntext' to="/about">
            
            <button className='navbtn'>About me</button>
           </Link>
           <Link className='btntext' to="/">
            
            <button className='navbtn'>Home</button>
           </Link>
            </div>
        <img className='headerimg' src={header} alt="first image" />
      
     </div>
    );
};

export default Header;