import BiologyPicture from '../assets/Biology.png';
import './SubjectCardBio.css';


function SubjectCardBio(){


    return(
        <>
        <div className="card">
            <img className='bio-card-img' src={BiologyPicture} alt="biology picture"></img>
            <h2 className='bio-header'>BIOLOGY</h2>
            <p>Get started on A/L Biology journey now.</p>


        </div>
        
        
        </>
    );
}

export default SubjectCardBio;