import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "./MyProvider";
import Entrance from "../../public/images/entrance.jpg"
const SignUp = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {setUser}=useContext(MyContext)
  const HandlerSubmit=(e)=>{
      e.preventDefault(e)
      const createList =async()=>{
        try{
          let data=await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify({
            email:email,
            password:password
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          let res =await data.json()
          setUser(res)
          localStorage.setItem("user",JSON.stringify(res))
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          navigate("/")
        }catch(error){
          console.log(error.message);
          
        }
      }
      createList()
  }
  return (
    <>
       <div className="min-h-screen w-full flex items-center justify-center bg-no-repeat bg-[#437143]" style={{ backgroundImage: `url(${Entrance})` }}>
       <div className="w-[500px] mx-auto mt-5 p-5 flex justify-start  shadow-2xl bg-[#ccc08c] ">
          <form onSubmit={(e)=>HandlerSubmit(e)} method="post" action="#">
            <div className="mt-6 flex flex-col justify-start">
              <label htmlFor="title" className="text-sm font-medium px-3 py-2">
                Email:
              </label>
              <input onChange={(e)=>setEmail(e.target.value)}
                type="text"
                placeholder="enter your email "
                className="w-full px-3 py-2 rounded-lg outline-none "
              />
            </div>
            <div className="mt-6 me-0">
              <label htmlFor="password" className="text-sm font-medium px-3 py-2">
                Password:
              </label>
              <input onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="enter your password "
                className="w-full px-3 py-2 rounded-lg outline-none "
              />
            </div>
            <div className="mt-3">
              <button className="px-2 py-1 bg-[#32946A] capitalize rounded-lg text-white">Register</button>
            </div>
          </form>
        </div>
       </div>
       
      
    </>
  );
};

export default SignUp;
