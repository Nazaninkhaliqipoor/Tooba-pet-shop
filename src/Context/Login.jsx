import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyProvider";
import Swal from "sweetalert2";
import Entrance from "../../public/images/entrance.jpg"
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(`http://localhost:3000/users?email=${email}`);
      const res = await data.json();
      if (res.length > 0 && res[0].password === password) {
        setUser(res[0]);
        localStorage.setItem("user", JSON.stringify(res[0]));
        Swal.fire({
          title: "Login successful",
          text: "Welcome",
          icon: "success",
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Error",
          text: " The email or password is incorrect",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="min-h-screen w-full flex items-center justify-center bg-no-repeat bg-[#437143]"
      style={{ backgroundImage: `url(${Entrance})` }}>
         <div className="w-[500px] mx-auto mt-5 p-5 flex justify-start bg-[#ccc08c] shadow-2xl  ">
        <form onSubmit={(e) => HandlerSubmit(e)} method="post" action="#">
          <div className="mt-6 flex flex-col justify-start">
            <label htmlFor="title" className="text-sm font-medium px-3 py-2">
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="enter your email "
              className="w-full px-3 py-2 rounded-lg outline-none "
            />
          </div>
          <div className="mt-6 me-0">
            <label htmlFor="password" className="text-sm font-medium px-3 py-2">
              Password:
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="enter your password "
              className="w-full px-3 py-2 rounded-lg outline-none "
            />
          </div>
          <div className="mt-3">
            <button className="px-2 py-1 bg-[#32946A] capitalize rounded-lg text-white">
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
     
    </>
  );
};

export default Login;
