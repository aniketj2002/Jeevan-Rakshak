function AboutUs(){
  return(
    <div
          className="flex max-lg:flex-col justify-center lg:p-10 p-8 gap-12  py-8 lg:py-16 mt-20 mb-10 lg:mx-20 mx-5 border-2 rounded-tr-3xl rounded-bl-3xl shadow-inner items-center"
          id="aboutus"
        >
          <img
            src="images/bg1.png"
            alt=""
            className="rounded-3xl lg:w-[25vw] w-[50vw] h-[40vw] min-h-[150px] min-w-[180px] shadow-lg"
          />
          <div className="max-w-[450px]">
            <div className="text-4xl max-lg:text-xl font-bold pb-4">About Us</div>
            <div className="text-lg font-semibold pb-5">
            Welcome to our blood donation website! Here you will find all the information you need to know about blood donation, its benefits, and you can contribute to saving lives.
            </div>
            <div className="">
            Every year, millions of people around the world require blood transfusions due to various reasons such as surgeries, cancer treatments, accidents, and other medical conditions. Unfortunately, there is a shortage of blood supply in many countries, and this is where you can help!

By donating blood, you can save up to three lives. Blood donation is a safe and simple process that takes about 45 minutes, including the screening process. Your donation can make a significant impact on someone's life, and the experience can be rewarding for you as well.
            </div>
          </div>
        </div>
  )
}
export default AboutUs ;