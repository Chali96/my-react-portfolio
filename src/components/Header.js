import header from './images/header.jpeg';

const Header = () => {
    return (
     <div className="container">
       
        <img className='headerimg' src={header} alt="first image" />
     </div>
    );
};

export default Header;