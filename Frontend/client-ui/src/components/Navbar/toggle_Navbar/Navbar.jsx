import React from 'react'
import "./Nav-style.css"
import book_svg from "../../../assets/2.png"
import { RxCross2  } from 'react-icons/rx'
import {} from 'framer-motion'
import { Link } from 'react-router-dom';
const menu_items = [{name:"Home",link:'/'}, {name:"E-books",link:'/ebook'}, {name:"Subscription",link:"/sub"}, {name:"Publication",link:'/publications'}, {name:"About us",link:'/about_us'}];
const Navbar = ({toggle,open,login}) => {
  return (
    <div className={open?'Toggle-nav':'Toggle-nav close'}>
      {open?<><div className="close-icon">
        <RxCross2 onClick={toggle}/>
      </div>
      <div className="t-nav-container" onClick={toggle}>
      <span className='Line-sepreator'></span>
        <div className="t-nav-listItems">
        {menu_items.map((value, key) => (
          <Link to={value.link}>
              <div className="t-listItem">{value.name}</div>
              </Link>
            ))}
        </div>
        <span className='Line-sepreator'></span>
        {login?<>
      <div className="login-avatar">
        <div className="avatar-img">
          <img src={book_svg} className="a-img"/>
        </div>
        <div className="t-user_name">
          Jatin
        </div>
      </div>
      </>: <div className="t-nav-buttons">
        <Link to="/login">
        <div className="t-but">
            Login
        </div>
        </Link>
        <Link to="/signup"><div className="t-but">
            Signup
        </div></Link>
        
      </div>}
       
      <div className="t-foot">
        <div className="tf-title">
          BOOKS
        </div>
        <div className="tf-sub-title">
        Copyright © 2023 
        </div>
      </div>
      </div>
      </>:<></>}
      
      
    </div>
  )
}

export default Navbar