import React from 'react'
import  "../Css/SideBarOption.css";
export default function SideBarOption({active,Icon,text}) {
  return (
    <div className={`SideBarOption ${active && `SideBarOption-active`}`}>
        <Icon className="icon"/>
        <h3>{text}</h3>
    </div>
  )
}
