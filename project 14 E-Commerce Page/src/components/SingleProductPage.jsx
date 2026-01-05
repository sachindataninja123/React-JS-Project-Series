import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const SingleProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios(
      `https://fakestoreapi.com/products/${params.id}`
    );
    setProduct(response.data);
    setLoading(false);
    // console.log(response.data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loader className={"p-35"} />;

  return (
    <div>
      <div className=" bg-gray-700 m-5 rounded-[5px] group cursor-pointer flex items-start justify-between px-20">
        <img
          className="aspect-square w-[40%]  object-contain group-hover:scale-95 duration-300 transition-all"
          src={product.image}
          alt="image"
        />
        <div className="w-[40%] mt-5">
          <div className="py-2 px-4">
            <h1 className=" text-2xl ">{product.title}</h1>
            <div className="flex products-center justify-between mt-5">
              <p className="bg-[#388E3C] w-fit font-semibold px-1.5 rounded-[5px]  text-m">
                {product.rating.rate} ⭐
              </p>
              <p className="text-gray-300">{product.rating.count} Ratings</p>
            </div>
            <p className="font-semibold text-4xl text-gray-300 mt-6">
              ₹ {product.price}
            </p>
            <p className="text-lg text-gray-300 mt-6">{product.description}</p>

            <div className="flex items-center justify-between mt-10">
              <button className="uppercase bg-amber-600 font-semibold py-2 px-12 rounded-md cursor-pointer hover:bg-amber-700 transition-all duration-200">
                Buy Now
              </button>
              <button className="uppercase bg-amber-600 font-semibold py-2 px-12 rounded-md cursor-pointer hover:bg-amber-700 transition-all duration-200">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
