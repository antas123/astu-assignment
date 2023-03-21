import React from 'react'
import "./Right.css"
import logo from "./IMAGES/cwnobg.png"
import InLeft from './InLeft'
import LeftList from './LeftList'

const RightSide = () => {
  return (
    
    <div className='container rt' style={{backgroundColor:"#00235B"}}>
    <img className='logoimg'  src={logo} alt="img" />
    <InLeft />
    <LeftList/>
  
    </div>
  )
}

export default RightSide