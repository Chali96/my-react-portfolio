import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
          <h2> Home page  </h2>

                 
           <button className='btn'>  <Link className='btntext' to="/about" />  
           About me! 
           </button>
         

          

       </div>
    );
};

export default Home;