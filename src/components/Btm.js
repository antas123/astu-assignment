import React from 'react'
import "./b.css"
import g from "./IMAGES/garbage.png"
import re from "./IMAGES/resend.png"

const Btm = ({p1 , p2}) => {

 const deleteHandler=(i)=>{
      p2(i);
 }

  return (
    <div className='btm'>

     <table className='tb'>
     <tbody>
     <tr>
        <th>Co-workers email</th>
        <th>Roles</th>
        <th>Delete invite</th>
        <th>re send invite</th>
     </tr>
    
     <tr>
        <td>akshay@cashwise.com</td>
        <td>owner</td>
     </tr>

     <tr>
        <td>saini@cashwise.com</td>
        <td>admin</td>
        <td> <button className='btns' > <img className='g' src={g} alt="" /> </button> </td>
            <td><button className='btns' > <img className='g' src={re} alt="" /> </button></td>
     </tr>

     {p1.map((p1item, i) => {
        return (
            <tr key={i+1}>
            <td>{p1item}</td>
            <td>admin</td>
            <td> <button className='btns' onClick={()=>deleteHandler(i)}> <img className='g' src={g} alt="" /> </button> </td>
            <td><button className='btns' > <img className='g' src={re} alt="" /> </button></td>
            </tr>
        )
       
     })}
</tbody>
        
     </table>

    </div>
  )
}

export default Btm