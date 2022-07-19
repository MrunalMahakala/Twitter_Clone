import React from 'react'
import {BsTwitter,BsBellFill,BsBookmarkFill} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {RiHome7Fill,RiMessage3Fill,RiMoreFill,RiUser3Fill,RiQuillPenLine} from 'react-icons/ri'
import SideBarOption from './SideBarOption';
import '../Css/SideBar.css'
export default function SideBar() {
  return (
    <div className='sidebar'>
        <BsTwitter className='logo'/>

        <SideBarOption active Icon={RiHome7Fill} text={'Home'}/>
        <SideBarOption Icon={BsSearch} text={'Explore'}/>
        <SideBarOption Icon={BsBellFill} text={'Notifications'}/>
        <SideBarOption Icon={BsBookmarkFill} text={'Bookmarks'}/>
        <SideBarOption Icon={RiMessage3Fill} text={'Messages'}/>
        <SideBarOption Icon={RiUser3Fill} text={'Profile'}/>
        <SideBarOption Icon={RiMoreFill} text={'More'}/>

        <button className='tweet'>
          <RiQuillPenLine className='pen-icon'/>
          <h3>Tweet</h3></button>
    </div>
  )
}
