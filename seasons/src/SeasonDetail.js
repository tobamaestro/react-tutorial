import "./SeasonDetail.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "Burr, it's chilly!",
    iconName: "snowflake",
  },
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"; //  lat > 0 => northern hemisphere
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDetail = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-detail ${season}`}>
      <i className={`icon-left ${iconName} massive icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} massive icon`} />
    </div>
  );
};

export default SeasonDetail;
