import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {BsPinterest} from 'react-icons/bs'
import {AiFillYoutube,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
function Footer() {
  return (
    <>
     <div className="container-fluid  mt-lg-5 footerMain p-3 p-lg-4">
      <div className="row"><div className="col mt-sm-3 text-center">
        
      <Link className="navbar-brand  navbrand-color fs-3" to="/">Navbar</Link>
        </div></div>
      <div className="row"><div className="col mt-lg-2 mt-sm-3  text-center  fs-3 ">
        <a className='mx-lg-3 mx-3 mx-sm-4' target='_blank' href="https://help.twitter.com/en"><AiFillTwitterCircle/></a>
        <a className='mx-lg-3 mx-3 mx-sm-4' target='_blank' href="https://www.facebook.com/"><BsFacebook/></a>
        <a  className='mx-lg-3 mx-3 mx-sm-4'target='_blank' href="https://www.instagram.com/"><AiFillInstagram/></a>
        <a className='mx-lg-3 mx-3 mx-sm-4' target='_blank' href="https://www.youtube.com/"><AiFillYoutube/></a>
        <a className='mx-lg-3 mx-3 mx-sm-4' target='_blank' href="https://in.pinterest.com/"><BsPinterest/></a>

        </div></div>
      <div className="row"><div className="col mt-lg-4  mt-3">
        <p className='text-center text-secondary '>Copyrgh 2023 &copy; Himanshu Enterainment.pvl.Lid.AlRights Resened
The contemt andimeges usedonthis on1 sneare copymigh. protecied and copynghs vests with therespective owmers.Theusageofthe content andimages onthis S websiteisimtendedto promoethe woisadnoenr ementoitheatst shal be
mplied. Unauthorizeduseis prohibited and pumishable bylaw</p></div></div>

      </div> 
    </>
  )
}

export default Footer
