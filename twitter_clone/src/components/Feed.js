import React, { useEffect, useState } from 'react'
import '../Css/feed.css'
import {RiImage2Fill,RiQuillPenLine} from "react-icons/ri"
import {AiOutlineGif} from 'react-icons/ai'
import {BsEmojiSmile} from 'react-icons/bs'
import {GiStarShuriken} from 'react-icons/gi';
import Post from './Post'
// import db from './firebase'
import {collection,getDocs} from 'firebase/firestore/lite';

export default function Feed() {
    // const [textAreaHeight,settextAreaHeight]=useState(38);
    // const event=(e)=>{
    //     const scrollheight =e.target.scrollheight;
      
    //     e.target.style.height="inherit";
    
    //     e.target.scrollheight=`${scrollheight}px+2px`;
    // }
    const [posts,setposts]=useState();
    useEffect(()=>{
        // db.collection('posts').onSnapshot(snapshot=>{
        //     setposts(snapshot.docs.map(doc=>doc.data()))
        // })
    },[])
  return (
    <div className='feed'>
        <div className='header'>
            <h3 className='home'>Home</h3>
            <GiStarShuriken className='star'/>
            {/* <h3 >stars</h3> */}
        </div>
        <div className='tweet-box'>
            <form>
                <div className='tweet-input'>
                    <img className='Avatar' alt="hellp"  src='https://images.unsplash.com/photo-1568016002953-5827f8f30e16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                    <textarea className='input-box '   placeholder='Write Something'></textarea>
                   
                </div>
            </form>
            <div className='tweet-add'>
                <div> 
                    <RiImage2Fill/>
                <AiOutlineGif/>
                <BsEmojiSmile/>
                </div>
               
            <button className='tweet'>
          <RiQuillPenLine className='pen-icon'/>
          <h3>Tweet</h3></button>
            </div>
        </div>
<div>
    {/* {posts.map(post=>(
        <Post name={posts.name} avatar={posts.avatar} img={posts.img} content={posts.text} username={posts.username} />
    ))} */}
   <Post name="Mrunal" 
   avatar="https://images.unsplash.com/photo-1568016002953-5827f8f30e16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
   img="https://images.unsplash.com/photo-1568016002953-5827f8f30e16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
   content="dhfksgbdbgsbgkbsdjgbkjdsbgjksbdjbhihf ew hfhjk  wjefhkw kjefh jkhf ojewe j efjhohaf
   a ehjahhfjkhfahkf h"
   username="@mrunal20"/>
   <Post name="Mrunal" 
   avatar="https://images.unsplash.com/photo-1568016002953-5827f8f30e16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
   img="https://images.unsplash.com/photo-1568016002953-5827f8f30e16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
   content="dhfksgbdbgsbgkbsdjgbkjdsbgjksbdjbhihf ew hfhjk  wjefhkw kjefh jkhf ojewe j efjhohaf
   a ehjahhfjkhfahkf h"
   username="@mrunal20"/>
   </div>
   
    </div>
  )
}
