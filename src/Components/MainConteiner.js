import {React} from 'react'
import '../styles/MainConteiner.css'
import {Banner} from './Banner'
import{BsPeopleFill} from 'react-icons/bs'
import { AudioList } from './AudioList'



function MainConteiner() {


  return (
    <div className='mainConteiner'>
      <Banner/>
      <div className='menuList'>
        <ul>
          <li><a href='#'>Popular</a></li>
          <li><a href='#'>Albums</a></li>
          <li><a href='#'>Songs</a></li>
          <li><a href='#'>Fans</a></li>
          <li><a href='#'>About</a></li>
        </ul>
        <p><i><BsPeopleFill/></i>15.2M <span>Following</span></p>
      </div>
      <AudioList/>
    </div>
  )
}
export { MainConteiner}