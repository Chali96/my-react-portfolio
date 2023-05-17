import { Link } from 'react-router-dom';
import image1 from './images/image1.jpeg';


const Home = () => {
    return (
        <div className="container">
          <h2> Home page  </h2>

                 
          
           
           <Link className='btntext' to="/about">
             <button className='btn'>  About me!   </button>
            </Link>  
          
          
           <img src={image1} alt="first image" />


          

       </div>
    );
};

export default Home;