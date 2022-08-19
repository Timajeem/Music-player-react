import React from 'react'

import Monatic from '../image/monatic.jpeg'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaHeadphones,FaCheck} from 'react-icons/fa'

function Banner() {
  return (
    <div className='banner'>
        <img src={Monatic} alt='img-monatic' className='bannerImg' />
        <div className='content'>
            <div className='breadCrump'>
                <p>Home <span>/Popular Artist</span></p>
                <i>
                    <AiOutlineMenu/>
                </i>
            </div>
            <div className='monatic'>
                <div className='left'>
                    <div className='name'>
                        <h2>Monatik</h2>

                    </div>
                    <p><i><FaHeadphones/>12,114,5343<span> listener</span></i> </p>
                </div>
                <div className='right'>
                    <a href='#'>Play</a>
                    <a href='#'><i><FaCheck/></i>Following</a>
                </div>
            </div>
        </div>

        <div className='bottomLayer'></div>
    </div>
  )
}

export {Banner}