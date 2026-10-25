import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Menu/Header";
import Home from "../Home/Home";
import Help from "../Help/Help";
import Login from "../../Context/Login";
import SignUp from "../../Context/SignUp";
import ProductRouter from "../Products/ProductRouter";
import Food from "../Food/Food";
import NotFound from "../NotFound/NotFound";
import Helps from "../Help/Helps";

const Wrapper = () => {
    return ( 
        <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop/*" element={<ProductRouter/>}/>
                <Route path="/food" element={<Food/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/help/:id" element={<Helps/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Wrapper;