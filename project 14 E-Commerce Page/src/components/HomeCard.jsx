

const HomeCard = ({ image, title }) => {
  return (
    <div className="flex items-start justify-between flex-col gap-6">
      <div className=" w-83 h-107.5 bg-white ">
        <h1 className="text-black font-semibold text-2xl p-5"> {title}</h1>
        <img className="w-75 m-auto mb-5 h-75" src={image} alt="" />
        <a href="#" className="text-blue-500 p-5 mt-10">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HomeCard;
