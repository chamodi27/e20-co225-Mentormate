import Navbar from '../Components/Navbar';
import coverImage from '../assets/Cover.png';

function Home(){


    return(
    <>
    <Navbar className="fixed top-0 w-full z-10" />

    <div className="container mx-auto pt-20 px-4 w-full flex flex-col items-center"> {/* Adjusted container to fit full width */}
                <div className="text-center">
                    <h1 className='text-3xl font-bold'>Welcome to MentorMate</h1>
                    <h2 className='pt-2 text-xl'>Your Personalized AI Tutor</h2>
                </div>

        <div className='mt-10 w-full'>
            <img src={coverImage} alt="Cover" className='w-full rounded-lg shadow-lg' />
        </div>

        <div className='pt-5 w-full max-w-lg'>
            <p className='text-center text-xl font-bold'>Our application:</p>
            <ul className='list-inside list-disc mt-3'>
            <li>Provides questions</li>
            <li>Gets student answers</li>
            <li>Grades the answers</li>
            <li>Gives personalized feedback</li>
            </ul>
        </div>
    </div>
    </>)
}

export default Home;