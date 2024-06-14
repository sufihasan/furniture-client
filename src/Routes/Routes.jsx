
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateProutes from "./PrivateProutes";
import Allusers from "../pages/Dashboard/Allusers/Allusers";
import Allseller from "../pages/Dashboard/Allseller/Allseller";
import Allbuyer from "../pages/Dashboard/Allbuyer/Allbuyer";
import Reporteditem from "../pages/Dashboard/Reporteditem/Reporteditem";
import AddAFurniture from "../pages/Dashboard/AddAFurniture/AddAFurniture";
import MyProduct from "../pages/Dashboard/MyProduct/MyProduct";
import MyBayers from "../pages/Dashboard/MyBayers/MyBayers";
import Order from "../pages/Order/Order/Order";
import Blog from "../pages/Blog/Blog";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: '*', // Catch all other routes
                element: <NotFoundPage></NotFoundPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateProutes><Dashboard></Dashboard></PrivateProutes>,
        children: [

            {
                path: "users",
                element: <Allusers></Allusers>
            },

            {
                path: "allseller",
                element: <Allseller></Allseller>
            },
            {
                path: "allbuyer",
                element: <Allbuyer></Allbuyer>
            },
            {
                path: "reporteditem",
                element: <Reporteditem></Reporteditem>
            },
            {
                path: "addafurniture",
                element: <AddAFurniture></AddAFurniture>
            },
            {
                path: "myproduct",
                element: <MyProduct></MyProduct>
            },

            {
                path: "mybuyers",
                element: <MyBayers></MyBayers>
            },
            {
                path: '*', // Catch all other routes
                element: <NotFoundPage></NotFoundPage>
            }

        ]
    }
]);

