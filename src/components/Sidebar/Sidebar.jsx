

// rafce: shortcut to create react component 
import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

const Sidebar = () => {

    const [extended, setExtended] = useState(false)

  return (
    <div className="sidebar">
        <div className="top">
            <img onClick ={()=>setExtended(prev =>! prev)} src={assets.menu_icon} alt="" className="menu" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            <div className="recent">
                {extended?<p className="recent-title">Recent</p>:null}
                <div className="recent-entry">
                    {extended?<img src={assets.message_icon} alt="" />:null}
                    {extended?<p>What is react...</p>:null}
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar