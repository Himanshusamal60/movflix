import React, { useEffect, useState } from 'react'
import './detail.css'
import { useParams } from "react-router-dom"
import {AiFillStar} from 'react-icons/ai'
import Bookpage from '../Bookpage/Bookpage'
   

function Detail() {

    const [detailPage, setDetailPage ] = useState([])
    const { id} = useParams()
    
    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=> res.json())
        .then(data=>setDetailPage(data))
        // .then(console.log(detailPage))
      },[])

  return (


<>
   {
        detailPage.map((name)=>(
          <>{ name.show.id===id?
            <div className="movie">
            <div className="movie__intro w-100">
                <img className="movie__backdrop"  src={name ? name.show.image.original : ""} />
            </div>
            <div className="movie__detail ">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={name ? name.show.image.original : ""} />
                    </div>
                </div>
                <div className="movie__detailRight ">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{name ? name.show.name: ""}</div>
                        {/* <div className="movie__tagline">{name ? name.show.summary : ""}</div> */}
                        <div className="movie__rating">
                            {name ? name.show.rating.average: ""} <i className="stars"><AiFillStar/></i>
                          
                        </div>  
                        <div className="movie__runtime">{name ? name.show.runtime + " mins" : ""}</div>
                       
                        <div className="movie__genres">
                            {
                                 name
                                ? 
                                name.show.genres
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText mt-sm-3 text-info-emphasis">Synopsis</div>
                        <div>{name? name.show.summary : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links mt-sm-5 ">
                <div className="movie__heading text-white-50">Useful Links</div>
                {
                    name && name.show.url && <a href={name.show.url} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button text-center">Movie Homepage </span></p></a>
                }
                
            </div>
         
            <Bookpage />
        </div>
            :
          ""
          }
          </>
        ))
      }
</>
  )
}

export default Detail
