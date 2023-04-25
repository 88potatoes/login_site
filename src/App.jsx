import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Landing from './Landing.jsx';
import Register from './Register.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route path="/login_site" element={<Landing />} />
      <Route path="/login_site/login" element={<Login/>}/>
      <Route path="/login_site/register" element={<Register/>}/>
      <Route path="/login_site/home" element={<Home/>}/>
    </Routes>
    </>
  );
};

export default App;
