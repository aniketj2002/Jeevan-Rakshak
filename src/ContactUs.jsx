import Footer from "./Footer";
import Navbar from "./Navbar";

function ContactUs(){
    return (
      <div>
      <Navbar/>
        <div className="w-full p-10 py-20 flex justify-center  items-center gap-10 max-lg:flex-col-reverse">
          <div
            className=" flex flex-col justify-between items-start "
          >
            <h1 className="text-4xl font-bold">
              Love to hear from you , <br />
              Get in touch
            </h1>
            <div className="flex  mt-10  gap-5 w-[100%] justify-between">
               <div className="left  flex flex-col  w-full gap-5">
                <div className="flex flex-col">
                   <label htmlFor="name" className="mb-2"> Your name </label>
                  <input
                    type="text"
                    id="name"
                    className="border-2 p-2 rounded-md focus:outline-none focus:border-[#2593D2] shadow-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col">
                   <label htmlFor="email-id" className=""> Your Email </label> 
                  <input
                    type="email"
                    id="name"
                    className="border-2 p-2 rounded-md focus:outline-none focus:border-[#2593D2] shadow-lg"
                    placeholder="Enter your email"
                    email-id="email-id"
                  />
                </div>
                <div className="flex flex-col " >
                   <label htmlFor="message" className=""> Message </label> 
                  <textarea
                    id="message"
                    className="border-2 p-2 rounded-md focus:outline-none focus:border-[#2593D2]  resize-none shadow-lg h-28" 
                    placeholder="Let tell us more about your problem"
                  ></textarea>
                </div>
                <div id="contactus ">
                  <button
                    className=" text-white max-lg:w-[40vw] pl-4 pr-7 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 text-center shadow-lg relative"
                  >
                    Contact Us 
                    <i className="material-icons text-white text-[18px] absolute right-2 top-3">send</i>
                  </button>
                </div>
               </div>
               
            </div>
          </div>
          <div className="w-[360px]">
            <img src="./images/contactus.png" className="w-full inline-block" alt=""/>
           </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ContactUs ; 