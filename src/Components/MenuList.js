import {BsFillHouseFill} from 'react-icons/bs'
import {BiPulse} from 'react-icons/bi'
import {BiBroadcast} from 'react-icons/bi'
import {BiMicrophone} from 'react-icons/bi'
import {BiMoviePlay} from 'react-icons/bi'
import {BiPodcast} from 'react-icons/bi'

const MenuList = [
     {
    id : 1,
    icon : <BsFillHouseFill/>,
    name : "Home",
},
{
    id : 2,
    icon : <BiPulse/>,
    name : "Discover",
},
{
    id : 3,
    icon : <BiBroadcast/>,
    name : "Radio",
},
{
    id : 4,
    icon : <BiMicrophone/>,
    name : "Artist",
},
{
    id : 5,
    icon : <BiMoviePlay/>,
    name : "Albums",
},
{
    id : 6,
    icon : <BiPodcast/>,
    name : "Podcast",
},
];

export {MenuList};