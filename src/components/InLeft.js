import React from 'react'
import "./In.css"
import g from "./IMAGES/G.png"
import arrow from "./IMAGES/right-arrow.png"

const InLeft = () => {
  return (
    <div className='in'  >

    <div className='one' > <img className='g' src={g} alt="" /> </div>
    <div className='two'> <h5>Entity Name</h5> <h6>www.website.com</h6> </div>
     <div className='three'> <img className='ar' src={arrow} alt="" /> </div>

    </div>
  )
}

export default InLeft