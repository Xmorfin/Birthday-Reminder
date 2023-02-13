import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map(({ name, age, image }) => {
        return (
          <>
            <div>
              <h1>{name}</h1>
              <p>{age}</p>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
