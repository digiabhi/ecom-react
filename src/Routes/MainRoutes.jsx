import { Route, Routes } from "react-router-dom";

import ProductDetails from "../components/ProductDetails/ProductDetails";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ProductList from "../pages/ProductList/ProductList";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default MainRoutes;