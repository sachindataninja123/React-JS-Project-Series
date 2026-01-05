import React from "react";
import heroImage from "../assets/hero_image.jpg";
import HomeCard from "./HomeCard";
import img1 from "../assets/8th.jpg";
import img2 from "../assets/5th.jpg";
import img3 from "../assets/6th.jpg"
import img4 from "../assets/2nd.jpg"
import img5 from "../assets/3rd.jpg"
import img6 from "../assets/4th .jpg"
import img7 from "../assets/9th.jpg"
import img8 from "../assets/7th.jpg"


const Home = () => {
  return (
    <div>
      <div className="h-[70vh] w-full relative">
        <img
          className="h-full w-full object-cover relative"
          src={heroImage}
          alt="image"
        />
        <p className="bg-white text-black  flex items-center justify-center absolute bottom-0 w-[85%] m-10 py-2 ml-25">
          You are on Shop.com. You can also shop on Amazon India for millions of
          products with fast local delivery.{" "}
          <a className="text-blue-400">Click here to go to shop.in</a>
        </p>
      </div>
      <div className="bg-gray-300 gap-10 h-full w-full grid grid-cols-4 p-10">
        <HomeCard title={" Health & Personal Care"} image={img1} />
        <HomeCard title={"Beauty picks"} image={img2} />
        <HomeCard title={"Electronics"} image={img3} />
        <HomeCard title={"Fashion & Trends"} image={img4} />
        <HomeCard title={" New Arrival in Toys"} image={img5} />
        <HomeCard title={" Pet Care"} image={img6} />
        <HomeCard title={" Clothes"} image={img7} />
        <HomeCard title={" Furniture"} image={img8} />
      </div>
    </div>
  );
};

export default Home;
