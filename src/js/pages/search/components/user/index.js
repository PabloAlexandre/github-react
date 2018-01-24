import React from 'react'
import {Link} from 'react-router-dom'
import {avatar, overlay, username} from './style.css'

export default ({user}) => (
  <div className="dib w-100 w-50-m w-20-l pa2 relative tc">
    <Link to={`/users/${user.login}`} >
      <div className="dib v-top relative w-100">
        <div className={`overlay absolute w-100 h-100 ${overlay}`}></div>
        <img className={avatar} src={user.avatar_url} />
      </div>
      <p className={`w-100 absolute white bottom-0 left-0 tc fw7 ph3 ${username}`}>{user.login}</p>
    </Link>
  </div>
)
