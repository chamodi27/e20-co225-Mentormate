import { Routes, Route } from 'react-router-dom';
import ChatMentor from './pages/ChatMentor';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here if needed */}
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<ChatMentor />} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
  );
}

export default App;
