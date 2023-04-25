import { Link, redirect } from "react-router-dom";

export default function Landing() {
    function goToLogin() {
        console.log('hiZ')
        console.log(redirect("/login"))
        return redirect("/login");
    };

    return (<>
        <div className="flex items-center justify-center h-screen bg-zinc-500">
            <div className="border-red-900 border-2 w-96 h-96 flex flex-col 
            items-center justify-evenly">
                <p>Hi</p>
                <Link to={"/login_site/login"} className="h-24 w-36 flex bg-slate-200 flex-col 
                justify-center items-center shadow-md">Login</Link>
            </div>
        </div>
    </>
    );
};