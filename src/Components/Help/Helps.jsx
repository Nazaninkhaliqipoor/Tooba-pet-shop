import { useLocation, useParams } from "react-router-dom";

const Helps = () => {
    // console.log(useParams());
    // let {id} = useParams()
    const query = useLocation()
    console.log(query.search);
    let result =new URLSearchParams(query.search)
    console.log(result.get("seo"));
    
    return ( 
        <>
        {/* <h1 className="text-pink-600 text-2xl">this page is for donation thanks for your Helps-{id}</h1> */}
        <h1 className="text-pink-600 text-2xl">this page is for donation thanks for your Helps-{result.get("seo")}</h1>
        </>
     );
}
 
export default Helps;