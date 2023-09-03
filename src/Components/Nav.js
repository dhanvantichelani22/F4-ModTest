import React from 'react'
import {Link} from "react-router-dom";
import { MenuItems } from './MenuItems';

const Nav = () => {
  return (
    <div>
    <nav className='NavItems'>
        <h1>Dictionary App</h1>
        <ul className='navMenu'>
          {MenuItems.map((item,index) =>{
            return(
              //key={index}=>  target-> index
              <li key={index}> 
          <Link className={item.navName} to={item.url}>{item.title}</Link>
          
        </li>
            )
          })}
        </ul>
    </nav>
    </div>
  )
}

export default Nav;