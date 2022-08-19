import React,{useState, useRef, useEffect,} from 'react'
import '../styles/MusicPlayer.css'
import { BsHeartFill,BsHeart } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import {BsSkipBackwardFill,BsSkipForwardFill,BsFillShareFill } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";

 export const MusicPlayer = (props) =>  {

    const[isLove,setLoved] = useState(false);
    const[trackIndex, setTrackIndex] = useState(0);
    const[isPlaying,setIsPlaying] = useState(false);

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const { source, img } = props.song
    const [url, setUrl] = useState(source);
    const audioPlayer = useRef(); //our audio tag
    const progressBar = useRef()  //re
    const animationRef = useRef()

    useEffect(() => {
        if (audioPlayer) audioPlayer.current.volume = props.volumeVal / 100;
    }, [props.volumeVal])
    // не работает это время секунды
      useEffect( () => {  
        setUrl(source);
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
      }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, source]);

      const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }
      const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
          audioPlayer.current.play();
          animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
          audioPlayer.current.pause();
          cancelAnimationFrame(animationRef.current);
        }
      }
     const whilePlaying = () =>{
        progressBar.current.value = audioPlayer.current.currentTime;
        changeCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying)}
        

     const changeProgress =() =>{
         audioPlayer.current.currentTime = progressBar.current.value;
         changeCurrentTime()
     };

    const changeCurrentTime =() =>{
        progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value / duration *100}%`)
        setCurrentTime(progressBar.current.value)
    }

// tyt balo range

    const changeLoved =() =>{
        setLoved(!isLove);
    }

    const backThirty =() =>{
        progressBar.current.value -= 30;
        changeProgress()
    }

    const forwardThirty =() =>{
        progressBar.current.value = Number(+progressBar.current.value + 30);
        changeProgress()
    }


  return (
    <div className='musicPlayer' >
        <div className='songImage'>
            <img src={img} alt='imgmusic'/>
        </div>
        <div className='songAttributes'>
            <div className='top'>
                <div className='left'>
                    <div className='loved' onClick={changeLoved}>
                    {isLove ? (
                    <i>
                        <BsHeartFill/>
                    </i>) : 
                    (<i><BsHeart/></i>)}
                    </div>
                    <div className='download'><i><AiOutlineDownload/></i></div>
                </div>
                <div className='middle'>
                    <div className='back' onClick={backThirty}>
                        <i><BsSkipBackwardFill/></i>
                    </div>
                    <div className='playPause' onClick={togglePlayPause}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </div>
                    <div className='forward' onClick={forwardThirty} >
                        <i><BsSkipForwardFill/></i>
                        
                    </div>
                    <div className='track'>
            </div>
                </div>
                <div className='right'><i><BsFillShareFill/></i></div>
            </div>
            <div className='bottom'>
                <audio src={url} ref={audioPlayer}></audio>
                <div className='currentTime'>{calculateTime(currentTime)}</div>
                <input type='range' className='progresBar' defaultValue="0" ref={progressBar} onChange={changeProgress} />
                <div className='duration'>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </div>
        </div>

    </div>
  )
}