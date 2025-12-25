import React from "react";
import UserCard from "./components/UserCard";
import userData from "./components/Users.json";

const App = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold text-center my-8 text-gray-100">Card Design</h1>
      <div className="flex flex-wrap gap-8 m-auto mb-10 items-center justify-center">
        {userData.map((obj, idx) => {
          return (
            <div key={idx}>
              <UserCard
                name={obj.name}
                role={obj.role}
                img={obj.img}
                likecount={obj.likecount}
                commentcount={obj.commentcount}
                sharecount={obj.sharcount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
