import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function callRegister(e) {
        e.preventDefault();
        console.log("calledRegister");
        try {
            const u = await fetch("http://3.25.229.144:3001/register", {
            method: "POST",
            body: JSON.stringify({username: username, password: password}),
            headers: {"Content-Type": "application/json"}
            });

            const body = await u.json();

            if (body.msg === "username already exists") {
                alert("username already exists");
                return;
            }

            alert("user has been successfully created")
            navigate("/login_site/login");
            
        } catch (error) {
            console.log(error);

        }

    };
    
    return (
    <div className="bg-amber-400 flex w-screen h-screen justify-center items-center">
        <div className="border-black h-[50%] w-[50%] border-2 flex flex-col
        items-center justify-evenly">
          <p className='text-2xl'>Welcome</p>
          <form className='space-y-4 flex flex-col items-center text-center' onSubmit={callRegister}>
            <input type="text" className="rounded-md" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="text" className="rounded-md" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button type="submit">Register</button>
          </form>
        </div>
    </div>
    );
};