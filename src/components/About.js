import Header from './Header';
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'

const About = () => {
    return (
    <div className='container'>
        <h3>
            Get to know me
        </h3>
        <p>I will write 1 truth and 1 lie about me. <br/>
            Hover over the button you believe is the truth about me.
            <br/>
            1. I am 1.80 centimeter
            <br/>
            2. I dont like lasagne
         </p>
        <div className='aboutbtn'>
        <button className='btn1'> </button>
        <button className='btn2'> </button>
        </div>
        <p>Green is true & red is false</p>
       
       <div className='aboutimg'>
       <img className='aboutimg' src={image3} alt="first image" />
        <img className='aboutimg' src={image4} alt="first image" />
       </div>
      


    </div>
    );
};

export default About;