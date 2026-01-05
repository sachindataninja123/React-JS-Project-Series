import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loader className={"p-35"} />;

  return (
    <div className="grid grid-cols-5 gap-4 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[300px]:grid-cols-1 p-7">
      {products.map((item) => {
        return <ProductsCard item={item} key={item.id} />;
      })}
    </div>
  );
};

const ProductsCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${item.id}`)}
      className="bg-gray-700 rounded-[5px] group cursor-pointer"
    >
      <img
        className="aspect-square object-contain p-4 group-hover:scale-95 duration-300 transition-all"
        src={item.image}
        alt="product-img"
      />
      <div className="py-2 px-4">
        <h1 className="text-gray-300 line-clamp-2 text-lg group-hover:text-blue-500 duration-200 transition-all">
          {item.title}
        </h1>
        <p className="font-semibold text-2xl text-gray-300">₹ {item.price}</p>
        <div className="flex items-center justify-between mt-5">
          <p className="bg-[#388E3C] w-fit font-semibold px-1.5 rounded-[5px]  text-m">
            {item.rating.rate} ⭐
          </p>
          <p className="text-gray-300">{item.rating.count} Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
