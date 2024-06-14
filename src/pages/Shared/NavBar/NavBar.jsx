import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaUser } from "react-icons/fa";


const NavBar = () => {

    const { logOut, user } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const navLinks = <>
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/order/leavingroom">Furniture</Link></li>
        {/* <li className=""><Link to="/menu">Bedroom</Link></li> */}
        {/* <li className=""><Link to="/menu">Dining</Link></li> */}
        <li className=""><Link to="/blog">Blog</Link></li>
        {
            user && <li className=""><Link to="/dashboard">Dashboard</Link></li>
        }

        {
            user ? <>
                <li onClick={handleLogout} className="pb-3 btn btn-ghost">LogOut</li>
                <span className="border rounded-full px-2 pt-1 text-xl "><FaUser className="inline"></FaUser> : {user?.displayName}</span>
            </> :
                <>
                    <li className=""><Link to="/login">Login</Link></li>
                    <li className=""><Link to="/register">Register</Link></li>
                </>
        }

    </>

    return (
        <div className="navbar bg-base-100 mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">Furniture Treasure</a> */}
                <img className="w-52" src="https://i.ibb.co/Wx650Kp/br-Navlogo7.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
            <div className="navbar-end form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
        </div>
    );
};

export default NavBar;