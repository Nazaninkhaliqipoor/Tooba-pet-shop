import { useEffect, useState } from "react";
import animals from "../../../public/images/animals.png"
import design from "../../../public/images/design.png"
import Shops from "./Shops";
const Shop = () => {
    const [products,setProducts]=useState(null)
    const fetchPoducts=async()=>{
        try {
            let data =await fetch("http://localhost:3000/products")
            let res =await data.json()
            setProducts(res)
            console.log(res);
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchPoducts()
    },[])
    return ( 
        <>
           <div className="w-full flex flex-row flex-wrap justify-end relative " >
           <div className="absolute w-[30%] left-0">
            <h1 className="absolute top-[130px] left-[120px] text-[white] text-2xl ">Happy pets,Happy life</h1>
                    <img src={design} alt="" />
                </div>
                <div className=" w-[20%] mt-[100px] absolute right-[710px] top-[100px]">
                <h1 className="absolute top-[90px] left-[80px] text-[white] text-2xl ">Feed with Love</h1>
                    <img src={design} alt="" />
                </div>
            <div className="w-[40%]">
                <img src={animals} alt="" />
                
            </div>
          <div className="flex flex-row flex-wrap w-full justify-between  ">
                {products?.map((elem)=>{
                 return(
                    <Shops product={elem } key={elem.id}/>
                 )
                })}
          </div>
           </div>
        </>
     );
}
 
export default Shop;
