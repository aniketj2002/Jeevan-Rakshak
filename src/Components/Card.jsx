function Card({ re }) {

  const source="./images/"+re.image+".png";  

  return (
    <div className="p-8 max-lg:p-4 rounded-md h-[540px] w-[full] border-2 text-gray-500 flex flex-col hover:shadow-md hover:scale-[.98] transition-all duration-300 shadow-lg overflow-hidden review" >
      <div className="mx-auto my-2">
        <img
          className="object-cover rounded-full w-[80px] h-[80px] inline-block"
          src={source}
          alt=""
        />
      </div>
      <div className="flex-grow">{re.comment}</div>
      <div className="font-bold text-black pt-2 text-right">
        <div className="text-yellow-400 text-left">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        {re.name}
      </div>
    </div>
  );
}
export default Card;
