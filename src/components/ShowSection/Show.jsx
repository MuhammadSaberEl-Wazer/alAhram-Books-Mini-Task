import React from "react";
import "./show.scss";

const Show = () => {
  return (
    <section className="show">
      <div className="show-container">
        <div className="show-left">
          <h3 className="show-left-h3">Build your library</h3>
          <p className="show-left-p">
            Buy two selected books and get
            <br /> one for free
          </p>
          <a className="show-left-a" href="">
            View all
          </a>
        </div>
        <div className="show-right">
          <div className="image-container">
            <img
              className="show-img"
              src={require("../../image/show-pic.png")}
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Show;
