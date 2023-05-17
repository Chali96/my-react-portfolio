import { Link } from 'react-router-dom';
import image1 from './images/image1.jpeg';


const Home = () => {
    return (
        <div className="container">
          <h2> Welcome </h2>
           <p className='text'>
            My name is Chali Mohamedsani. I got into coding 2022 october and honestly
            today im happy i did. Its been a very fun but at the same time a very intense and 
            hard journey. But i think its just the beginning and i have alot to look forward
            to. This course that i have been studying the past 4-5 months has really given me 
            so much. 
           </p>
                 
           <Link className='btntext' to="/about">
            
             <button className='btn'>  About me!</button>
            </Link>  
          
           <img className='homeimg' src={image1} alt="first image" />

       </div>
    );
};

export default Home;