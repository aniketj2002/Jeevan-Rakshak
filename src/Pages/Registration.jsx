import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {

  const navigate = useNavigate() ; 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bloodGrp: "",
    pincode: "",
  });
  




  const register = async () => {
    try {
      const res = await axios.post("https://jeevan-rakshak-backend.onrender.com/user/register", formData);


      var data = {
        "username": formData.firstName + " " + formData.lastName,
        "secret": "secret-123-jBj02",
        "email": formData.email,
        "first_name": formData.firstName,
        "last_name": formData.lastName,
      };


      await axios.post('https://api.chatengine.io/users/' , data , {
        headers : { 
          'PRIVATE-KEY': '{0bb6fb28-2ba6-41b1-b142-da4a18c4ceb0}'
        }
      })
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    register() ; 
  };
  return (
    <div>
      <div className="flex items-center max-lg:h-screen lg:h-[88vh] w-full justify-center bg-[url('../public/images/background.png')]  bg bg-no-repeat rounded-xl relative">
        <div className="backdrop-blur-md h-full w-full absolute right-0 left-0 top-0 bottom-0 z-10 rounded-xl opacity-30 bg-white"></div>
        <div className="w-[40%] min-w-[360px] bg-white rounded-xl shadow-xl px-10 py-12 m-4 md:max-w-sm md:mx-auto border z-20">
          <span className="block w-full text-2xl uppercase font-bold mb-8">
            Register For a Free Account
          </span>
          <form className="mb-2" action="/" onSubmit={submitHandler}>
            <div className="flex gap-3">
              <div className="mb-2">
                <label htmlFor="firstname" className="block text-xs mb-1 w-1/2">
                  First Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  name="firstName"
                  id="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-2 ">
                <label htmlFor="lastname" className="block text-xs mb-1 w-1/2">
                  Last Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  name="lastName"
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-2 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-2 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={changeHandler}
              />
            </div>

            <div className="flex gap-3">
              <div className="mb-2 w-[50%]">
                <label htmlFor="bloodGrp" className="block text-xs mb-1 w-[50%]">
                  Blood
                </label>
                <select
                  name="bloodGrp"
                  id="bloodGrp"
                  value={formData.bloodGrp}
                  onChange={changeHandler}
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2] "
                >
                  <option value={"A+"}>A+</option>
                  <option value={"A-"}>A-</option>
                  <option value={"B+"}>B+</option>
                  <option value={"B-"}>B-</option>
                  <option value={"AB-"}>AB-</option>
                  <option value={"AB-"}>AB-</option>
                  <option value={"O+"}>O+</option>
                  <option value={"O-"}>O-</option>
                </select>
              </div>
              <div className="mb-2 ">
                <label htmlFor="location" className="block text-xs mb-1 w-1/2">
                  Location
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  id="location"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <button className="bg-[#f45454] hover:bg-[#dc4545] text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Sign Up{" "}
            </button>
          </form>
          <p className="text-center mt-2">
            <a
              href="./login"
              className="text-grey-dark text-sm no-underline hover:text-grey-darker font-semibold"
            >
              Already have an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
