import React, { useState, useEffect } from "react";
import "../style/Catalogue.css";

const Catalogue = (props) => {
  const [type, setType] = useState("");

  //Change state when props changes
  useEffect(() => {
    setType(props.type);
  }, [props]);

  //Function to get image based on the state
  const getImageUrl = (type) => {
    switch (type) {
      case "Mountain":
        return "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg";
      case "Bird":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg";
      case "Food":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg";
      case "Beaches":
        return "https://media.cntraveler.com/photos/59ef91dd8d4f736d51415c2e/master/w_2667,h_2000,c_limit/7MileBeach-2013-HiRes.jpg";
      default:
        return "";
    }
  };

  return (
    <div className="catalogue-container">
      <div className="title">{type + " Pictures"}</div>
      <div className="image-container">
        <img className="image" alt={type} src={getImageUrl(type)} />
        <img className="image" alt={type} src={getImageUrl(type)} />
        <img className="image" alt={type} src={getImageUrl(type)} />
        <img className="image" alt={type} src={getImageUrl(type)} />
        <img className="image" alt={type} src={getImageUrl(type)} />
        <img className="image" alt={type} src={getImageUrl(type)} />
        <img className="image" alt={type} src={getImageUrl(type)} />
        <img className="image" alt={type} src={getImageUrl(type)} />
      </div>
    </div>
  );
};

export default Catalogue;
