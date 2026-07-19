import { Route, Routes } from "react-router-dom";
import Show from "./Show";

const ProductRouter = () => {
    return (  
        <>
          <Routes>
            <Route path="/:id" element={<Show/>}/>
          </Routes>
        </>
    );
}
 
export default ProductRouter;