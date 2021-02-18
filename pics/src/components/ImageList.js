import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return <ImageCard key={img.id} image={img} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
