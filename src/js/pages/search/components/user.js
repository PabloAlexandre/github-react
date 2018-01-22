import React from 'react'
import {Link} from 'react-router-dom'
import {avatar} from '../style.css'

export default ({user}) => (
  <Link to={`/users/${user.login}`} >
    <div className="br2 ba dark-gray b--black-10  w-100 pa3">
      <div className="dib mr3 v-top">
        <img className={avatar} src={user.avatar_url} />
      </div>
      <div className="dib v-top">
        <p>{user.login}</p>
      </div>
    </div>
  </Link>
)
