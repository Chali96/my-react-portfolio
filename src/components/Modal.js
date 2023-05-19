import { AiOutlineClose } from 'react-icons/ai';
// i imported the x button

const Modal = ({children, close}) => {
    return (
        <div className="overlay"> 
            <div className="content">
                
                <AiOutlineClose className='close' onClick={close}/>
               {children} 
            </div>            
        </div>
    ); 
};

export default Modal;