import React from 'react'
import "../Css/Widgets.css"
import {BsSearch} from 'react-icons/bs'
import {MdHighlightOff}from"react-icons/md"

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
export default function Widgets() {
  return (
    <div className='widget'>
        <div className='widget-header'>
            <div className='Search'>
                <div className='inside-search'>
                    <BsSearch className='search-icon'/>
                    <input className="Search-input" placeholder='Search'></input>
                    <MdHighlightOff className='clear-search'/>
                </div>   
            </div>
            <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1529097667858546689"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
            {/* <div className='Trending'></div>
            <div className='who_to_follow'></div> */}
        </div>

    </div>
  )
}
