import { Route, Routes } from "react-router-dom";
import Shop from "../Shop/Shop";


const ProductRouter = () => {
    return (  
        <>
          <Routes>
            <Route path="/" element={<Shop/>}/>
          </Routes>
        </>
    );
}
 
export default ProductRouter;