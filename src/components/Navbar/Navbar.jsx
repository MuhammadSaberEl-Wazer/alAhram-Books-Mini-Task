import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const changeActive = (element) => {
    let allAhtml = document.getElementsByClassName("aForActivation");
    console.log(element);

    var arr = [].slice.call(allAhtml);
    arr.map((item) => {
      item.classList.remove("activeA");
    });

    element.classList.add("activeA");
  };

  //   let x = document.getElementById("hhh")
  //   let all = document.getElementsByClassName("aForActivation")
  //   console.log(x,all);

  return (
    <div className="nav-bar">
      <div className="nav-layer-one">
        <div className="nav-layer-one-cont w-[95%] m-auto">
          <div className="nav-layer-one-left">
            <h4 className="main-title">Al-Ahram Books</h4>
          </div>
          <div className="nav-layer-one-middle">
            <div className="search-bar-with-icon">
              <input type="text" placeholder="Search by author, name, book.." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="nav-layer-one-right">
            <a href="">
              <i className="fa-solid fa-heart"></i>
            </a>
            <a href="">
              <i type="text" className="number">
                0
              </i>
            </a>
            <a href="">
              <p>EN</p>
            </a>
          </div>
        </div>
      </div>
      <div className="nav-layer-two">
        <div className="nav-layer-two-middle m-auto w-[50%]  ">
          <a
            id="hhh"
            className="a-home activeA aForActivation"
            onClick={(e) => changeActive(e.target)}
          >
            Home
          </a>
          <a
            className="a-best aForActivation"
            onClick={(e) => changeActive(e.target)}
          >
            Bestseller
          </a>
          <a
            className="a-find aForActivation"
            onClick={(e) => changeActive(e.target)}
          >
            Find a store
          </a>
          <a
            className="a-blog aForActivation"
            onClick={(e) => changeActive(e.target)}
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
