import { FaEnvelope, FaHome, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isSeller] = useSeller();
    return (
        <div className="flex my-2">

            <div className="w-64 min-h-screen bg-orange-500">

                <ul className="menu p-2">

                    {
                        isAdmin ? <>

                            <li><NavLink to="/dashboard/adminhome">
                                <FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/allseller">
                                <FaUtensils></FaUtensils>All Sellers</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/allbuyer">
                                <FaUtensils></FaUtensils>All Buyes</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/reporteditem">
                                <FaUtensils></FaUtensils>Reported Item</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/users">
                                <FaUser></FaUser>All User</NavLink>
                            </li>

                        </> :

                            isSeller ? <>


                                <li><NavLink to="/dashboard/addafurniture">
                                    <FaUtensils></FaUtensils>Add a Funiture</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/myproduct">
                                    <FaUtensils></FaUtensils>My Product</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/mybuyers">
                                    <FaUser></FaUser>My Bayers</NavLink>
                                </li>

                            </> : <>
                                <li><NavLink to="/dashboard/adminhome">
                                    <FaHome></FaHome>Buyer  Home</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/additems">
                                    <FaUtensils></FaUtensils>My Orders</NavLink>
                                </li>

                            </>

                    }


                    {/* share the link for al kind user */}
                    <hr className="w-3/4  mx-auto" />
                    <li><NavLink to="/">
                        <FaHome></FaHome>Home</NavLink>
                    </li>

                    <li><NavLink to="/contact">
                        <FaEnvelope></FaEnvelope>Contact</NavLink>
                    </li>
                </ul>

            </div>

            <div className="flex-1 pl-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;