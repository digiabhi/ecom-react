import { Route, Routes } from "react-router-dom";

import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ProductList from "../pages/ProductList/ProductList";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default MainRoutes;