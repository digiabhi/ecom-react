import { Route, Routes } from "react-router-dom";

import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ProductList from "../pages/ProductList/ProductList";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default MainRoutes;