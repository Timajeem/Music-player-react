import React, {useState,} from 'react'
import { AiOutlineCustomerService } from "react-icons/ai";
import { BsClock,BsHeart,BsHeartFill} from "react-icons/bs";
import { MusicPlayer } from './MusicPlayer';
import {Songs} from './Songs'
import { TrackList } from './TrackList';


function AudioList( {song}) {

    const [downloads,setSongs] = useState(Songs)
    const [download,setSong] = useState(Songs[0].download);
    const [img,setImage] = useState(Songs[0].img);
    const allLi = document.querySelectorAll('li');
    let [currentSong, updateCurrentSong] = useState(Songs[0]);
    const [volumeVal, setVolume] = useState(30);
    // иногда работает это меню где песни 

    const handleVolumeChange = (volumeVal) => {
        setVolume(volumeVal);

    }
    function changeMenuAction(el){
        const songs = document.querySelectorAll('.songs');
        songs.forEach((n) => n.classList.remove('active'));
        el.currentTarget.classList.add('active');
        const songIndx = Songs.find((item) => {
            return item.id === +el.currentTarget.id;
        })
        currentSong = updateCurrentSong(songIndx)
    }
    const chnageFavourite = (id) =>{
        Songs.forEach(download =>{
            if( download.id == id){
                download.favourite = !download.favourite
            }
        })
        setSongs([...Songs])
    }

    const setMainSong =(songSrc,imgSrc) =>{
        setSong(songSrc);
        setImage(imgSrc);
    }

  return (
    <div className='audioList'>
        <h2 className='title'>
            The list <span>{`${Songs.length} songs`}</span>
        </h2>
        <div className='songsContainer'>
            {downloads && downloads.map((download,index)=>(
               <div className='songs' id={download?.id} key={download?.id} 
               onClick={changeMenuAction.bind(this)}
               >
                <div className='count'>{`#${index + 1}`}</div>
                <div className='song'>
                <div className='imgBox'>
                    <img src={download?.img} alt='img'/>
                </div>
                <div className='section'>
                    <p className='songName'>
                        {download?.author_name}
                        <span className='spanArtist'> {download?.name}</span>
                    </p>

                    <div className='hits'>
                        <p className='hit'>
                            <i>
                                <AiOutlineCustomerService/>
                            </i>
                            77,345,720
                            </p>
                        <p className='duration'>
                            <i>
                                <BsClock/>
                                3.07
                            </i>
                        </p>
                        <div className='favourite'
                        onClick={() => chnageFavourite(download?.id)}
                        >
                            {
                                download?.favourite ? 
                            <i>
                                <BsHeart/>
                            </i> 
                            :
                            <i>
                                <BsHeartFill/>
                            </i>
                            }

                            
                            
                        </div>

                    </div>
                </div>
                </div>
            </div>
                ))}
            
        </div>
        <TrackList onChange={handleVolumeChange}/>
        <MusicPlayer song={currentSong} volumeVal={volumeVal}/>
    </div>
  )
}

export  {AudioList}