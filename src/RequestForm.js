import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RequestForm() {
  const navigate = useNavigate();
  const state = useContext(AppContext);
  const [token, setToken] = state.token;
  const [user, setUser] = state.userApi.user;
  const [formData, setFormData] = useState({
    location: "",
    desc: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGrp, setBloodGrp] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setBloodGrp(user.bloodGrp);
    }
  }, [user]);
  const postRequest = async () => {
    try {
      await axios.post("https://jeevan-rakshak-backend.onrender.com/request/addRequest", formData, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postRequest();
    navigate("/");
  };

  const changeHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex items-center max-lg:h-screen lg:h-fit w-full justify-center bg-[url('../public/images/background.png')]  bg bg-no-repeat rounded-xl relative">
        <div className="backdrop-blur-md h-full w-full absolute right-0 left-0 top-0 bottom-0 z-10 rounded-xl opacity-30 bg-white"></div>
        <div className="w-[40%] min-w-[360px] bg-white rounded-xl shadow-xl px-10 py-8 m-4 md:max-w-sm md:mx-auto border z-20 mb-10">
          <span className="block w-full text-2xl uppercase font-bold mb-6">
            Help Save A Life
          </span>
          <form onSubmit={submitHandler} className="flex gap-2 flex-col">
            <div className="flex gap-3">
              <div>
                <label htmlFor="firstname" className="block text-xs mb-1 w-1/2">
                  First Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  placeholder="Patient First Name"
                  name="firstName"
                  value={firstName}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs mb-1 w-1/2">
                  Last Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  placeholder="Patient Last Name"
                  name="lastName"
                  value={lastName}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs mb-1 w-1/2">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="email"
                placeholder="Patient Email-Id"
                name="email"
                value={email}
              />
            </div>
            <div>
              <label htmlFor="bloodGrp" className="block text-xs mb-1 w-1/2">
                Blood Group
              </label>
              <input
                name="bloodGrp"
                id="bloodGrp"
                value={bloodGrp}
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
              >
              </input>
            </div>

            <div>
              <label htmlFor="Location" className="block text-xs mb-1 w-1/2">
                Location
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="text"
                id="Location"
                placeholder="Hospital Address"
                name="location"
                value={formData.location}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs mb-1">
                Details
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2] align-text-top"
                type="text"
                height="100px"
                placeholder="Details"
                name="desc"
                value={formData.desc}
                onChange={changeHandler}
              />
            </div>
            <button className="  px-5 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 text-white">
              Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
