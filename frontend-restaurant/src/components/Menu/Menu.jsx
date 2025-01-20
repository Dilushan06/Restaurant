/* eslint-disable no-unused-vars */
import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = () => {
  return (
    <div className='menu' id='menu'>
        <h1>Explore our menu</h1>
        <p className='menu-text'>Choose from diverse menu</p>
        <div className="menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className='menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Menu
