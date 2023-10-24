import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import  { AppContext } from "./Context/AppContext";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const state = useContext(AppContext);

  const [isLogged, setIsLogged] = state.isLogged;
  const [token , setToken] = state.token;

  const logoutRouteHandler = async () => {
    try {
      await axios.get("https://jeevan-rakshak-backend.onrender.com/user/logout");
      setToken(null);
      setIsLogged(false);
      localStorage.removeItem("firstLogin");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  const registerRouteHandler = () => {
    navigate("/registration");
  };
  const chatRouteHandler=()=>{
    navigate("/chat");
  }
  const contactRouteHandler = () => {
    navigate("/contactus");
  };
  const homeRouteHandler = () => {
    navigate("/");
  };
  const FAQRouteHandler = () => {
    navigate("/FAQ");
  };
  return (
    <nav
      className="w-full flex justify-between items-center p-[10px] px-[30px] lg:flex-row flex-col sticky lg:-top-[50px] rounded-lg border-b-2 bg-white opacity-90 backdrop-blur-sm z-50 -top-[250px]"
      id="nav"
    >
      <div
        className="flex hover:scale-105 transition-all duration-200 relative items-end w-[290px] hover:cursor-pointer"
        onClick={homeRouteHandler}
      >
        <img src="images/j.png" alt="" className="w-[60px]" />
        <div className="text-[35px] font-bold text-[#000000] left-[46px] absolute tracking-wider">
          <span className="font-bold text-[#f45454]">eevan</span>Rakshak
        </div>
      </div>
      <div className="flex justify-center sticky lg:gap-8   text-[18px] py-2 text-[#7C7C7C] font-semibold lg:flex-row flex-col max-lg:w-full">
        <div className=" rounded-md  hover:scale-105 max-lg:py-2 hover:text-lightBlue transition-all duration-200 hover:cursor-pointer max-lg:w-full max-lg:text-center   max-lg:hover:bg-slate-100">
          <div onClick={FAQRouteHandler}>FAQ</div>
        </div>
        <div className=" rounded-md  hover:scale-105 max-lg:py-2 hover:text-lightBlue transition-all duration-200 max-lg:w-full max-lg:text-center  max-lg:hover:bg-slate-100">
          <a onClick={homeRouteHandler} href="#aboutus">
            About Us
          </a>
        </div>
        <div className= " rounded-md  hover:scale-105 max-lg:py-2 hover:text-lightBlue transition-all duration-200 hover:cursor-pointer max-lg:w-full max-lg:text-center  max-lg:hover:bg-slate-100">
          <div onClick={contactRouteHandler}>Contact Us</div>
        </div>
        <button
          onClick={()=>{navigate('/profile')}}
          className="  rounded-md  hover:scale-105 max-lg:py-2 hover:text-lightBlue transition-all duration-200 opacity-100 lg:hidden max-lg:w-full max-lg:text-center  max-lg:hover:bg-slate-100 "
        >
          Profile
        </button>
      </div>
      <div className="flex lg:gap-5 gap-3 text-[#F7F5EB] text-[18px] font-semibold">
        <button
          onClick={()=>{navigate('/profile')}}
          className="max-lg:w-[40vw]  rounded-md  hover:scale-105 transition-all duration-200 opacity-100 max-lg:hidden"
        >
          <img src="./images/user_avatar.png" className="w-[40px] rounded-full" alt="" />
        </button>
        <button
          onClick={chatRouteHandler}
          className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 opacity-100"
        >
          Chat
        </button>
        <button
          onClick={logoutRouteHandler}
          className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 opacity-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
