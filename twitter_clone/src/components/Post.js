import React from 'react'
import {MdOutlineVerified,MdOutlineFavorite,MdOutlineComment,MdIosShare} from 'react-icons/md'
import {AiOutlineRetweet} from 'react-icons/ai'
import '../Css/post.css'
export default function Post(
    {avatar,name,img,verified,username,content}
) {
   
  return (
    <div className="post">
        
         <div className='whole'>
            <div className='first'>
            <img className='avatar' alt='img' src={avatar}></img>
            <div className='post-head'>
            <h3 className='post-header'>{name}</h3>{
                verified && <MdOutlineVerified className='verified'/>
            }
                
                <b className='post-header'>{username}</b>
            </div>
                
            </div>
            <div className='second'>
                <p>{content}</p>
                <img className='postimg' alt="img" src={img}></img>
            </div>  
            <div className='post-footer'>
                <MdOutlineComment/>
                <MdOutlineFavorite/>
                <AiOutlineRetweet/>
                <MdIosShare/>
            </div>   
         </div>
    </div>
  )
}
