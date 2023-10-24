import { useState } from "react";
import Card from "./Components/Card";
import data from "./data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react";


function CustomerReview() {
   const [num,setNum]=useState(0);
 
   useEffect(() => {
    const interval = setInterval(() => {
      setNum(num<4?num+1:0);
    }, 4000);
    return () => clearInterval(interval);
  }, [num]);
    return (
        <div className="w-full h-[700px] my-16">
            <div className="text-4xl font-bold text-center mt-10 pb-10">
                Customer Reviews
            </div>
            <div
                className="flex gap-1 font-semibold text-md px-16 max-m:px-4  mx-auto justify-center"
            >
            <button onClick={()=>setNum(num>0?num-1:4)}><svg className="rounded-full hover:bg-slate-200 text-black p-2 h-fit w-fit" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m13.707 4.707-1.414-1.414L3.586 12l8.707 8.707 1.414-1.414L6.414 12l7.293-7.293z" /><path d="m19.707 4.707-1.414-1.414L9.586 12l8.707 8.707 1.414-1.414L12.414 12l7.293-7.293z"/></svg></button>
               <div className="scale-75 w-full opacity-70  max-m:hidden"><Card re={data[num>0?num-1:4]}></Card></div>
               <div className="w-full max-w-[320px] "> <Card re={data[num]}></Card></div>
                <div className="scale-75 w-full opacity-70 max-m:hidden">
                <Card re={data[num+1<5?num+1:0]}></Card>
                </div>
         
              <button onClick={()=>setNum(num+1<5?num+1:0)}><svg className="rounded-full hover:bg-slate-200 text-black p-2 h-fit w-fit" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m11.707 3.293-1.414 1.414L17.586 12l-7.293 7.293 1.414 1.414L20.414 12l-8.707-8.707z"/><path d="M5.707 3.293 4.293 4.707 11.586 12l-7.293 7.293 1.414 1.414L14.414 12 5.707 3.293z"/></svg></button>
              
            </div>
        </div>
 
    )
};
export default CustomerReview; 