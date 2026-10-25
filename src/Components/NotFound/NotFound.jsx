import { useNavigate } from "react-router-dom";

const NotFound = () => {
const navigate =useNavigate()
setTimeout(()=>{
navigate("/")
},2000)
    return ( 
        <>
        <h1 className="text-center capitalize text-red-700 p-5 text-5xl">this page is not found...!</h1>
        </>
     );
}
 
export default NotFound;