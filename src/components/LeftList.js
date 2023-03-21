import React from 'react'
import "./In.css"
import folder from "./IMAGES/folderpic.png"

const LeftList = () => {
  return (
    <div className='list'>
        <ul className='ll'>
            <li className='a'> <img className='folder' src={folder} alt="" />  Document Generation</li>
            <li className='a'> <img className='folder' src={folder} alt="" /> corporate Documents</li>
            <li className='a'> <img className='folder' src={folder} alt="" /> filling Documents</li>
        </ul>
    </div>
  )
}

export default LeftList