import React, { useState } from "react";
import "./top.css";
import Button from "react-bootstrap/Button";
import i from "./IMAGES/ibtn.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';



const Top = ({ onArrayUpdate }) => {
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false)
  
  function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      return (false)
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Owner can send invitations , admin will have access to all features once invited
    </Tooltip>
  );

  const render = () => {

    if(email==="")
    {
      alert("please fill email");
      return;
    }
   
   if(ValidateEmail(email)==false)
   {
    alert("please enter valid email")
    return
   } 
    onArrayUpdate(email)
    setEmail('');
  };

  return (
    <div className="top">
      <p>Invite your co-workers to invest in Cashwise</p>
     
     <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
       <img className="i" src={i} alt="" placement="right"  />
    </OverlayTrigger>


      <input
        className="lin"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <select className="op">
        <option value="volvo">Admin</option>
        <option value="saab">User</option>
      </select>
      <br />
      <br />
      <input className="lin" type="text" placeholder="email" />
      <select className="op">
        <option value="volvo">Select</option>
      </select>

      <p className="am">+Add More</p>

      <Button onClick={render} className="bt" variant="primary">
        Send Invite
      </Button>
    </div>
  );
};

export default Top;
