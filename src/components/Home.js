import { Button } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
          <h2> Home page  </h2>

          <Link className='btntext' to="/about">           
           <button className='btn'> About me! </button>
          </Link>

          

       </div>
    );
};

export default Home;