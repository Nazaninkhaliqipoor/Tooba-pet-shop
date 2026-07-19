import { Link } from "react-router-dom";
import mainSlider from "../../../public/images/mainSlide.png";
import panje from "../../../public/images/panj2.png";
import food from "../../../public/images/food.jpg";
import toys from "../../../public/images/toys.jpg";
import bed from "../../../public/images/bed.jpg"
import grooming from "../../../public/images/grooming.jpg"
const Home = () => {
  return (
    <>
      <div className="w-full flex justify-end flex-wrap">
        <div className="w-[50%] flex justify-start relative  ">
          <h1 className="absolute top-7 left-6 flex flex-col text-4xl font-bold text-[#9c6739] text-4xl font-bold text-[#9c6739]">
            where Happy Pets,
            <span className="text-[#32946A] font-semibold mt-2">Begin...</span>
            <p className=" mt-3 w-[300px] text-sm leading-6 ">
              Everything your beloved pets need for a happier,healthier
              life,with carefully chosen essentials,quality products and
              thoughtful care for every moment you share together.
            </p>
          </h1>
          <img className="[w-40%]" src={panje} alt="" />
        </div>
        <div className="w-[45%] flex justify-end ">
          <img className="w-[70%]" src={mainSlider} alt="" />
        </div>
        <div className="w-full flex flex-row justify-between ">
          <div className="w-[15%] text-center mt-[50px] border-1 border-[#FDDABB] shadow-2xl">
            <Link to="/food" className="block">
              <img className="w-full rounded-full border-b-1 border-[#FDDABB] " src={food} alt="" />
              <p  className="bg-[#32946A] px-2 py-1  mt-2 font-medium rounded-2xl text-white w-[100px] ml-13">food</p>
            </Link>
          </div>
          <div className="w-[13%] text-center  ">
            <Link className="block">
              <img className="w-full rounded-full " src={toys} alt="" />
              <p className="bg-[#32946A] px-2 py-1 mt-2 font-medium rounded-2xl text-white w-[100px] ml-10" >toys</p>
            </Link>
          </div>  <div className="w-[13%] text-center">
            <Link>
              <img className="w-full rounded-full" src={bed} alt="" />
              <p className="bg-[#32946A] px-2 py-1 mt-2 font-medium rounded-2xl text-white w-[100px] ml-12">bed</p>
            </Link>
          </div>  <div className="w-[10%] p-2 text-center mt-[50px]">
            <Link>
              <img className="w-full rounded-full" src={grooming} alt="" />
              <p className="bg-[#32946A] px-2 py-1 rounded-2xl mt-4 font-medium text-white w-[100px] ml-4">grooming</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
