import { useState } from "react";
function Question({ re }) {
    const[collapse,setCollapse]=useState(false);
    const handleCollapse = ()=>{setCollapse(collapse=>!collapse)} 
    return (
        <div className=""><button className="font-bold text-xl mb bg-[#474646] text-white cursor-pointer p-[18px] w-full outline-none text-left hover:bg-[#555] coll relative" onClick={handleCollapse}>Q: {re.que}{collapse?<div className="absolute right-5 top-3">-</div>:<div className="right-5 absolute top-3">+</div>}</button>
        {collapse?<div className="text-xl text-[#575656] overflow-hidden bg-[#f1f1f1] p-2">
          A : {re.ans}
        </div>:<div></div>}</div>
    );
  }
  export default Question;