import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Header = () => {
    const [menu ,setMenu]=useState(null)
    const fetchMenu=async()=>{
        try {
        let res =await axios("http://localhost:3000/menu")
        setMenu(res.data)
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchMenu()
    },[])
    return (  
        <>
            <Menu menu={menu}/>
        </>
    );
}
 
export default Header;