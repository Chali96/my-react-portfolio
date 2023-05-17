import header from './images/header.jpeg';

const Header = () => {
    return (
     <div className="container">
        <h1>
            Chali Mohamedsani
        </h1>
        <img className='headerimg' src={header} alt="first image" />
     </div>
    );
};

export default Header;