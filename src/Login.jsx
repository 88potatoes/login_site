import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function checkLogin(e) {
        e.preventDefault();
        const u = await fetch("http://localhost:3001/login", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type": "application/json"}
        });
        const body = await u.json();
        
        if (body.username) {
            navigate("/home");
        } else {
            alert(" no match");
        }
    };
    
    return (
    <div className="bg-blue-500 flex w-screen h-screen justify-center items-center">
        <div className="border-purple-200 h-[50%] w-[50%] border-2 flex flex-col
        items-center justify-evenly">
          <p className='text-2xl'>Welcome</p>
          <form className='space-y-4 flex flex-col items-center text-center' onSubmit={checkLogin}>
            <input type="text" className="rounded-md" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="text" className="rounded-md" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button type="submit">Login</button>
          </form>
          <Link to="/register" className="bg-slate-50">Register Here</Link>
        </div>
    </div>
    );
};