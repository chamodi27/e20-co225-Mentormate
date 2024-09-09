import { Routes, Route } from 'react-router-dom';
import ChatMentor from './pages/ChatMentor';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Explore from './pages/Explore';
import Subject from './pages/Subjects';





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/explore' element={<Subject/>} /> 

      {/* Dynamic route for different subjects */}
      <Route path="/explore/selectmode/:subjectname" element={<Explore />} /> {/* In Explore, selectmode is included*/} 
      
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<ChatMentor />} />
      <Route path='/signup' element={<SignUp/>} />

    </Routes>
  );
}

export default App;
