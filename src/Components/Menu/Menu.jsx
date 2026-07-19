import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.jpg";
import "./css/menu.css";
const Menu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#f7edbf]">
        <div className="w-full flex items-center ">
          <div className="flex ">
            <img className="w-[125px] rounded-full" src={logo} />
            <h1 className="text-[#32946A] ml-[20px] mt-[50px] capitalize  font-semibold text-3xl tracking-wide">
              TOOBA
            </h1>
          </div>
          <div
            className={`menu-container${
              open ? "block" : "hidden"
            } md-block mx-auto `}
          >
            <ul className="flex gap-5 items-center text-[#32946A]">
              {menu?.map((elem) => {
                return (
                  <li
                    className="font-semibold text-xl tracking-wide"
                    key={elem.id}
                  >
                    <NavLink to={elem.path}
                     className={(navData)=>navData.isActive?"border-b-4 border-[#945047] pb-1 ":"text-[#32946A] border-transparent transition-all duration-200 "}
                    >
                      {elem.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
