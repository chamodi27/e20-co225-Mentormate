import PhysicsPicture from '../assets/Physics.png';
import './SubjectCardPhysics.css';


function SubjectCardPhysics(){


    return(
        <>
        <div className="card-phy">
            <img className='phy-card-img' src={PhysicsPicture} alt="physics picture"></img>
            <h2 className='phy-header'>PHYSICS</h2>
            <p>Start now to be a Physics hero.</p>


        </div>
        
        
        </>
    );
}

export default SubjectCardPhysics;