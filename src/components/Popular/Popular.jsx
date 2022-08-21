import React, { useCallback, useEffect, useState } from "react";
import OneBookPopular from "../OneBookPopular/OneBookPopular";
import "./popular.scss";

const Popular = (props) => {
  let { posts, getPagi, NoOfPagi } = props;
  const [items, setItems] = useState();
  const [selectedItems, setselectedItems] = useState();
  const [dispp, setdispp] = useState("unset");

  useEffect(() => {
    if (posts) {
      setItems(posts.results);
    }
  }, [posts]);

  useEffect(() => {
    if (selectedItems) {
      if (selectedItems.length > 7) {
        setselectedItems(items);
      } else {
        setselectedItems(items.slice(0, 6));
      }
    } else if (items) {
      setselectedItems(items.slice(0, 6));
    }
  }, [posts]);

  const getAll = useCallback(
    (e) => {
      if (items) {
        setselectedItems(items);
        setdispp("none");
      }
    },
    [items]
  );

  useEffect(() => {
    let allPagiEles =document.getElementsByClassName("item-middle")[0].childNodes;
    let i;
    console.log(allPagiEles,allPagiEles[0]);
    if (allPagiEles) {
      if (NoOfPagi) {
        for (i = 0; i < allPagiEles.length ; i++) {
          allPagiEles[i].classList.remove("selectedPagi");
        }
        // allPagiEles.map((ele) => {
        //   ele.classList.remove("selectedPagi");
        // });

        allPagiEles[NoOfPagi - 1].classList.add("selectedPagi");
      }
    }
  }, [NoOfPagi]);

  // useEffect(() => {
  //   if (items) {
  //     setselectedItems(items.results.slice(0, 6));
  //   }
  // }, [posts]);

  //   console.log(posts.posts.posts);
  return (
    <div className="popular">
      <div className="popular-cont">
        <div className="popular-one">
          <div className="popular-one-left">
            <h4 className="popular-one-left-h4">Popular Now</h4>
          </div>
          <div className="popular-one-right">
            <button
              className="popular-one-right-a"
              onClick={(e) => getAll(e)}
              style={{ display: `${dispp}` }}
            >
              View all
            </button>
          </div>
        </div>
        <div className="popular-two">
          {selectedItems ? (
            selectedItems.map((item) => {
              return (
                <OneBookPopular
                  className="book-componenet"
                  key={item.id}
                  title={item.title}
                  author={item.authors[0]}
                  imageUrl={item.formats}
                />
              );
            })
          ) : (
            <div class="spinner-border m-auto" role="status">
              <span class="visually-hidden m-auto">Loading...</span>
            </div>
          )}
        </div>
        <div className="pagination" style={{}}>
          <div className="pagi-items">
            <div className="item-left">
              <button
                className="prev-btn"
                value="prev"
                onClick={(e) => getPagi(e)}
              >
                Previous
              </button>
            </div>
            <div className="item-middle">
              <button
                className="middle-btn"
                value="1"
                onClick={(e) => getPagi(e)}
              >
                1
              </button>
              <button
                className="middle-btn"
                value="2"
                onClick={(e) => getPagi(e)}
              >
                2
              </button>
              <button
                className="middle-btn"
                value="3"
                onClick={(e) => getPagi(e)}
              >
                3
              </button>
              <button
                className="middle-btn"
                value="4"
                onClick={(e) => getPagi(e)}
              >
                4
              </button>
              <button
                className="middle-btn"
                value="5"
                onClick={(e) => getPagi(e)}
              >
                5
              </button>
            </div>
            <div className="item-right">
              <button
                className="next-btn"
                value="next"
                onClick={(e) => getPagi(e)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
