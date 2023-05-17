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
        <div className="footer">
            <FaFacebook onClick={handleFBClick} style={{ cursor: 'pointer' }} />
      <FaInstagram onClick={handleIGClick} style={{ cursor: 'pointer' }} />
      <FaTwitter onClick={handleIGClick} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default Footer;