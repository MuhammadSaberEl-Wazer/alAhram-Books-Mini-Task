import React, { useEffect, useState } from "react";
import "./onebook.scss";

const OneBookPopular = (props) => {
  //   console.log(title, author, imageUrl);
  const [title1, settitle] = useState();
  const [authorName1, setauthorName] = useState();
  const [imageUrl1, setimageUrl] = useState();

  useEffect(() => {
    if (props.title) {
      settitle(props.title);
    }
  }, [props.title]);

  useEffect(() => {
    if (props.author) {
      setauthorName(props.author.name);
    }
  }, [props.author]);

  useEffect(() => {
    if (props.imageUrl) {
      setimageUrl(props.imageUrl["image/jpeg"]);
    }
  }, [props.imageUrl]);

  return (
    <div className="one-book-popular">
      <div className="item">
        <div className="image-cont">
          <img className="book-image" src={imageUrl1} alt="" srcSet="" />
        </div>

        <h1 className="title-image">{title1}</h1>
        <h2 className="author-image">{authorName1}</h2>
      </div>
    </div>
  );
};

export default OneBookPopular;
