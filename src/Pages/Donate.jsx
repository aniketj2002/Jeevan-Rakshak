import React from "react";
import DonateCard from "../Components/DonateCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

export default function Donate() {
  const state = useContext(AppContext);
 
  const [token, setToken] = state.token;
  const [user, setUser] = state.userApi.user;

  const [arr, setArr] = useState([]);
  const [ind,pagesHandler]=useState(0);
  
 
  
  const getRequest = async () => {
    try {
      const res = await axios.get("https://jeevan-rakshak-backend.onrender.com/request/getAllRequest");
      

      const requiredArray = res.data.filter((request) => {
        let reqBloodGrp = request.user_id.bloodGrp ; 
        let userBloodGrp = user.bloodGrp ; 
        return (
          reqBloodGrp === userBloodGrp &&
          request.user_id._id !== user._id && request.status === "Pending"
        );
      });
    

      setArr(requiredArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    if(user){ 
      getRequest() ; 
    }
  },[user])

  

  return (
    <div className="">
      <Navbar />
      <div className="text-4xl font-bold pt-10 text-center p-4 m-4">Requests</div>
     
      <div className="w-full max-w-[850px] mx-auto mb-[200px] flex flex-col gap-5 bg-white justify-center items-center rounded-xl ">
      <table className="w-full">
        <thead className="border">
          <tr className="text-left">
            <th className=" py-2 w-[100px]"></th>
            <th className="py-2 w-[180px] ">Name</th>
            <th className="py-2 w-[180px]">Location</th>
            <th className=" py-2 w-[150px]">Blood Group</th>
            <th ></th>
          </tr>
        </thead>
        <tbody>
        {   
            arr.splice(ind,ind+10).map((element , index) => (<DonateCard key = {index} request = {element} />)) 
          }
        
        </tbody>
      </table>
      {arr.length>10?<div>{ind>=10?<div onclick={pagesHandler(ind-10)} className="cursor-pointer">Prev</div>:<></>}<div onclick={pagesHandler(ind+10)} className="cursor-pointer">Next</div></div>:<></>}
    </div>
      <Footer />
    </div>
  );
}
