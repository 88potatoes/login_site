import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Landing from './Landing.jsx';
import Register from './Register.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
  );
};

export default App;
