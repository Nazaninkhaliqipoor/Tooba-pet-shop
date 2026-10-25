import { Link } from "react-router-dom";

const Help = () => {
    return ( 
       <>
        <h1>this is Help page</h1>
        <Link className="px-2 py-1 bg-pink-300" to="/Help/10?seo=Doante-money-abondad-animals">Donate</Link>
       </>
     );
}
 
export default Help;