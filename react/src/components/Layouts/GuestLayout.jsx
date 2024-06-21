// react router dom
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            {/* OUTLET = Show the children of default layout  */}
            <Outlet />
        </div>
    );
};

export default GuestLayout;
