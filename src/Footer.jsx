function Footer() {
  return (
    <div className="bg-[#515050] w-full h-fit flex flex-row items-center">
      <ul className="text-white text-xl p-10 m-5 flex  w-full justify-around">
        <ul className="w-[20%] max-m:hidden">
          <li >About Website:</li>
        <li className=" text-[18px] ">Developed as a minor project for 6th semester.</li>
        </ul>
        <ul className="max-m:hidden">
          <li>Developed By:</li>
          <ul className=" text-lg">
            <li><a href="https:www.github.com/amang8775">Aman Gupta</a></li>
            <li><a href="https:www.github.com/aniketj2002">Aniket Jindal</a></li>
          </ul>
        </ul>

        <ul className="">
          <li className="text-left">Contact Us</li>
          <ul className=" text-lg">
            <li></li>
            <li>Phone: +919876543210</li>
            <li>Email: <a href="mailto:jeevanrakshak@gamil.com">jeevanrakshak@gamil.com</a></li>
          </ul>
        </ul>
      </ul>
    </div>
  );
}
export default Footer;
