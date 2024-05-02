import React from "react";
import { IoColorFillSharp } from "react-icons/io5";
// import {BsCarts3} from 'react-icons/bs'

function Sidebar(){
    return(

         <aside id="sidebar">
             <div className="sidebar-title">
                 <div className="sidebar-brand">
                       <BsCarts3 className="icon_header"/> SHOP
                 </div>
                 <span className="icon close_icon">X</span>
             </div>

             <ul className="sidebar-list">
                 <li className="sidebar-list-item">
                         <a href="">
                         <BsCarts3/>
                          Dashboard
                          <IoColorFillSharp />
                         </a>
                 </li>

                 <li className="sidebar-list-item">
                         <a href="">
                             <BsCarts3/> Products
                         </a>
                 </li>

                 <li className="sidebar-list-item">
                         <a href="">
                             <BsCarts3/> Categories
                         </a>
                 </li>

                <li className="sidebar-list-item">
                         <a href="">
                             <BsCarts3/> Customer
                         </a>
                 </li>

                 <li className="sidebar-list-item">
                         <a href="">
                             <BsCarts3/> Inventory
                         </a>
                 </li>

                 <li className="sidebar-list-item">
                         <a href="">
                             <BsCarts3/> Reports
                         </a>
                 </li>

                 <li className="sidebar-list-item">
                         <a href="">
                             <BsCarts3/> Setting
                         </a>
                 </li>
             </ul>
         </aside>
        //   <div>
        //     djeideiojdieojdioe
        //     <h1>Hello Aakash</h1>
        //     <button>Click me</button>
        //   </div>
    )
}

export default Sidebar;