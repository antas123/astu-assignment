import React, {useState} from 'react'
import Top from './Top'
import "./left.css"
import ar from "./IMAGES/left-arrow.png"
import Btm from './Btm'

const Left = () => {

const [array, setArray] = useState([])

  const arrayUpdateHandler = (email) => {  
    // setArray(( [...array, email]);
    // console.log(array);

    setArray((array)=>{
      const updatedArray = [...array , email];
      return updatedArray
    })
  }

  const arrayDelete=(i)=>{
      const updatedArrayData = array.filter((item , id)=>{
        return i != id;
      })
      setArray(updatedArrayData)
  }

  return (
    <div className='left'>
      <h2 className='cw'> <img className='ar' src={ar} alt="" /> Co-Workers</h2>

    <div className='t'>
      <Top onArrayUpdate={arrayUpdateHandler}/>
    </div>

    <div className='t'>
      <Btm p1 = {array} p2 = {arrayDelete}/>
    </div>

    </div>
  )
}

export default Left