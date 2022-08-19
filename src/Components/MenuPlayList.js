import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
import {PlayList} from './PlayList'
import {BiMusic} from 'react-icons/bi'
import {AiTwotoneDelete} from 'react-icons/ai'




function MenuPlayList() {
  return (
    <div className='playListContainer'>
        <div className='nameContainer'>
             <p>PlayList</p>
             <i><BiPlusMedical/></i>
        </div>
        <div className='playListScroll'>
            {
                PlayList && PlayList.map((list)=>(

            

            <div className='playList'>
           <i className='list'>
               <BiMusic/>
            </i>
            <p>{list.name}</p>
            <i className='trash'>
                <AiTwotoneDelete/>
                </i>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export  {MenuPlayList}