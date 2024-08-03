import MathsPicture from '../assets/Maths.png';
import './SubjectCardMaths.css';


function SubjectCardMaths(){


    return(
        <>
        <div className="card-math">
            <img className='math-card-img' src={MathsPicture} alt="maths picture"></img>
            <h2 className='math-header'>COMBINED MATHS</h2>
            <p>Get ready for exciting maths.</p>


        </div>
        
        
        </>
    );
}

export default SubjectCardMaths;