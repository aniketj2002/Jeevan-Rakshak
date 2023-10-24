import { useNavigate } from "react-router-dom";

function HeroSection() {
    
    const navigate = useNavigate() ; 
    const requestRouteHandler = ()=>{
        navigate('/requestBlood');
    }
    const donateRoutehandler = ()=>{
        navigate('/donateBlood') ; 
    }
    return (
        <section className="my-10">
            <div
                className="flex lg:flex-row flex-col-reverse justify-around items-center p-10 px-[60px] max-lg:px-[30px]"
            >
                <div className="left lg:w-[600px] max-lg:w-full">
                    <h1
                        className="text-4xl max-lg:text-2xl font-bold tracking-wide leading-[50px]"
                    >
                        Donate <span className="text-red-600">Blood</span> Save <span className="text-red-600">Lives!</span>
                    </h1>
                    <p className="text-textGrey my-4 max-lg:text-sm text-xl">
                    Donating blood is an act of kindness that can save lives. Every day, thousands of people need blood transfusions to stay alive. By donating blood, you can make a significant difference in someone's life, helping to ensure that they receive the blood they need to survive.
                    </p>
                    <div
                        className="text-white text-[20px] max-lg:text-[14px] font-semibold mt-10 gap-5 flex flex-wrap"
                    >
                        <button
                            onClick={requestRouteHandler}
                            className="px-5 py-2 w-[200px] rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 max-lg:w-fit"
                        >
                            Request Blood
                        </button>
                        <button
                            className="px-5 py-2 w-[200px] rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 max-lg:w-fit"
                            onClick={donateRoutehandler}
                        >
                            Donate Now!!
                        </button>
                    </div>
                </div>
                <div className="right">
                    <img
                        className="w-[400px] inline-block"
                        src="./images/bg3.png"
                        
                    />
                </div>
            </div>
        </section>
    )
}
export default HeroSection; 