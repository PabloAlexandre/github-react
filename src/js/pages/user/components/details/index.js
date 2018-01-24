import React from 'react'
import {avatar, container, imageContainer, button} from './style.css'

export default ({user}) => (
  <div className={`w-30-l w-100 ${container} v-top tc relative dib ph0 ph4-l`}>
    <div className={`br-100 ${imageContainer}`}>
      <img src={user.avatar_url} className={`br-100 ${avatar}`} />
    </div>

    <h1 className="black">{user.name}</h1>
    <p className="black">{user.bio}</p>
    <a href={user.html_url} className={`pa3 ${button} db`} target="_blank">See on GitHub</a>
  </div>
)
