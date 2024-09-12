import { Routes, Route } from 'react-router-dom';
import ChatMentor from './pages/ChatMentor';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Explore from './pages/Explore';
import Subject from './pages/Subjects';
import BioMainUnit from './pages/BioMainUnit';
import BioUnit1 from './pages/BioUnit1';





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<ChatMentor />} />
      <Route path='/signup' element={<SignUp/>} />

      <Route path='/explore' element={<Subject/>} /> 
      {/* Dynamic route for different subjects */}
      <Route path="/explore/selectmode/:subjectname" element={<Explore />} /> {/* In Explore, selectmode is included*/} 

      {/* Biology routes */}
      <Route path="/explore/selectmode/biology/biomainunit" element={<BioMainUnit />} />
      <Route path="/explore/selectmode/biology/biomainunit/BioUnit1" element={<BioUnit1 />} /> {/* Ensure correct path */}

      

    </Routes>
  );
}

export default App;
