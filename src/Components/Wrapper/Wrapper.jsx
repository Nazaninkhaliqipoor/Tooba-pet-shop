import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Menu/Header";
import Home from "../Home/Home";
import Help from "../Help/Help";
import Login from "../../Context/Login";
import SignUp from "../../Context/SignUp";
import ProductRouter from "../Products/ProductRouter";
import Food from "../Food/Food";

const Wrapper = () => {
    return ( 
        <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<ProductRouter/>}/>
                <Route path="/food" element={<Food/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>

            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Wrapper;