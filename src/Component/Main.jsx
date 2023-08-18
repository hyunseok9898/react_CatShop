import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = ({ data }) => {
  return (
    <>
      <section className="Main">
        {data.map((item) => {
          return (
            <li key={item._id}>
              <img src={item.img} alt={item.title} />
              <h2>제품:{item.title}</h2>
              <p>가격:{item.price}</p>
            </li>
          );
        })}
      </section>
    </>
  );
};

export default Main;
