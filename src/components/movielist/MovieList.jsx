import React, { useEffect, useState } from 'react'
import './movielist.css'
import Card from '../section/card/Card'


function MovieList() {

    const [mData, setMData] = useState([])

    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=> res.json())
        .then(data=>setMData(data))
        .then(data=>console.log(data))
      },[])
    

    // useEffect(() => {
    //     getData()
    // }, [type])


  return (
    <div className="movie__list">
    {/* <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2> */}
    <div className="list__cards ">
        {
            mData.map((data )=> (
                <Card  data={data} />
               
            ))
        }
    </div>
</div>
  )
}

export default MovieList
