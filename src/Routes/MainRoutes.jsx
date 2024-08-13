import { Route, Routes } from "react-router-dom";

import Error from "../pages/error/Error";
import Home from "../pages/home/Home";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default MainRoutes;