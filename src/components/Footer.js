import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Footer = () => {
  const handleFBClick = () => {
    window.open('https://www.facebook.com', '_blank');
  };


  const handleIGClick = () => {
    window.open('http://www.instagram.com', '_blank')
  }

  const handleTWClick = () => {
    window.open('http://www.twitter.com', '_blank')
  }

    return (
      // here i added the links to the socials
        <div className="footer">
            <FaFacebook className='icon' onClick={handleFBClick} style={{ cursor: 'pointer' }} />
      <FaInstagram className='icon' onClick={handleIGClick} style={{ cursor: 'pointer' }} />
      <FaTwitter className='icon' onClick={handleIGClick} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default Footer;