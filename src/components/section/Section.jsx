import React from 'react'
import Carsousel from '../carousel/Carsousel';
import MovieList from '../movielist/MovieList';

function Section() {
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch("https://api.tvmaze.com/search/shows?q=all")
  //   .then(res=> res.json())
  //   .then(data=>setData(data))
  //   // .then(data=>console.log(data))
  // },[])

  return (
    <div>
      <Carsousel />
      <h3 className='p-3 text-white-50 head fw-bolder '>Currently Showing</h3>
      
      <MovieList/>
    </div>
  )
}

export default Section
