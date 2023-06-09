import React from 'react';
import "./welcome.css";
import dx from "../../assets/Images/DX logo.jpg";
import profile from "../../assets/Images/profile.png";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Welcome = () => {
  return (
    <div className='header'>
      <img src={dx} alt='logo' className='logo'></img>
      <input className="search" placeholder='Search...'></input>
      <img src={profile} alt='profile' className='profile'></img>
      <MoreVertIcon className='options' style={{ fontSize: '32px' }}></MoreVertIcon>
      <PowerSettingsNewIcon className='logout' style={{ fontSize: '32px' }}></PowerSettingsNewIcon>
    </div>

  )
}
export default Welcome;
