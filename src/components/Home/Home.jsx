import React from "react";
import Popular from "../Popular/Popular";
import Show from "../ShowSection/Show";
import "./home.scss";

const Home = (props) => {
  let { posts, getPagi,NoOfPagi } = props;
  return (
    <section className="home">
      <div className="first-section show-section">
        <Show />
      </div>
      <div className="second-section Popular-section">
        <Popular posts={posts} getPagi={getPagi} NoOfPagi={NoOfPagi} />
      </div>
    </section>
  );
};

export default Home;
