import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Root = () => {
    return (
        
        <div className="w-full bg-slate-100" >

     <Navbar></Navbar>
            <Outlet></Outlet>
          
            <Footer>  <Skeleton /></Footer>
        </div>
    );
};

export default Root;