import React, { useState,createContext } from 'react'
import {FiMusic} from 'react-icons/fi'
import {Slider, styled} from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import '../styles/TrackList.css'

export const VolumeContext = createContext(30);

export function TrackList( {onChange}) {
  const [volumeVal, setVolume] = useState(30);

  const handleChange = (event, newValue) => {
    setVolume(newValue);
    onChange(newValue);
  };

  const PSlider = styled(Slider)(({theme, ...props}) => ({
    color: 'lime',
    height: 2,
    '&:hover': {
        cursor: 'auto',
    },
    '& .MuiSlider-thumb': {
        width: '13px',
        height: '13px',
        display: props.thumbless ? 'none' : 'block',
    }
}))
  return (
    <div className='trackList'>
        <audio src=''></audio>
        <div className='buttom'>
          <VolumeDown />
          <PSlider max={100} min={0} aria-label="Volume" value={volumeVal} onChange={handleChange} />
            <i><FiMusic/></i>
        </div>
    </div>
  )
}
