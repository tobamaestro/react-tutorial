import React from "react";

const ImageList = (props) => {
  //  destructured (image) object into 3 necessary fields only
  const images = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
