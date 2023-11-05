import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="w-full">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;