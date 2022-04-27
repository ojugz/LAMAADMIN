import React from 'react'
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LAMAADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/D5635AQH0fYI72Gxt-A/profile-framedphoto-shrink_200_200/0/1642046479752?e=2147483647&v=beta&t=jnl3HBenyTNVO8QbRFBbS3LJzH8xCaOkHulKHbqKE5g"alt="className=topAvatar"/>
        
          
        </div>
      </div>
    </div>
  );
      

}
