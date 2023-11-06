import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="w-full">
     
     <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;