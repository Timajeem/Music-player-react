import React from 'react'
import '../styles/LeftMenu.css'

import {FaTumblrSquare} from 'react-icons/fa'
import {FiMoreHorizontal} from 'react-icons/fi'
import {BiSearch} from 'react-icons/bi'
import {MenuList} from './MenuList'
import {Menu} from './Menu'
import { MenuPlayList } from './MenuPlayList'

function LeftMenu() {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            <i><FaTumblrSquare/></i>
            <h2>Tim</h2>
            <i><FiMoreHorizontal/></i>
        </div>
        <div className='searchBox'>
            <input type="text" placeholder='Search...'/>
            <i className='searchIcon'>
                <BiSearch/>
            </i>
        </div>
        <Menu title={'Menu'} menuObject={MenuList}/>
        <MenuPlayList/>
    </div>
  )
}

export  {LeftMenu}