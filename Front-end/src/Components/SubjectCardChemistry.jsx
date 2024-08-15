import ChemistryPicture from '../assets/Chemistry.png';
import './SubjectCardChemistry.css';


function SubjectCardChemistry(){


    return(
        <>
        <div className="card-chem">
            <img className='chem-card-img' src={ChemistryPicture} alt="chem picture"></img>
            <h2 className='chem-header'>CHEMISTRY</h2>
            <p>Chemistry is fun.</p>

        </div>
        
        
        </>
    );
}

export default SubjectCardChemistry;