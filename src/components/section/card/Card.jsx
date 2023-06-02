import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom";
import "./card.css";
import {AiFillStar} from 'react-icons/ai'
function Card({ data }) {
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isloading ? 
         <div className="cards">
         <SkeletonTheme color="#202020" highlightColor="#444">
             <Skeleton height={300} duration={2} />
         </SkeletonTheme>
     </div>
      : 
        <Link to={`/movie/${data.show.id}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="cards m-lg-3 m-sm-4">
            <h4 className="text-center  text-white-50">{data.show.name}</h4>
            <img
              src={data ? data.show.image.medium : ""}
              alt=""
              className="cards__img"
            />
            <div className="cards__overlay">
             
              <div className="cards__runtime">
                <span className="text-secondary fw-bold">Ln : </span>
                <small className="text-secondary-emphasis fw-bold">

                {data ? data.show.language : ""}
                </small>
                <span className="card__rating ">
                  {data ? data.show.rating.average : ""} <i className="stars"><AiFillStar/></i>{" "}
                </span>
                <div className="cards__description text-white-50">
                  {data ? data.show.summary.slice(3, 118) + "..." : ""}
                </div>
              </div>
            </div>
          </div>
        </Link>
      }
    </>
  );
}

export default Card;
