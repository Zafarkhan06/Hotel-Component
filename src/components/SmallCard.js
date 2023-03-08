import React from "react";
import "./SmallCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const SmallCard = (props) => {
  return (
    <div className="card">
        <a href={props.url}>
      <div className="image-container">
        <img className="card-image" src={props.image} alt="Restaurant" />
      </div></a>
      <div className="card-body">
        <h2 className="rest-name">{props.name}</h2>
        <div className="rating">
          <div className="rest-rating">
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              <StarIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              {props.rate}
            </span>
          </div>
        </div>
        <div className="reviewss">
          <span style={{}}>{props.review}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
