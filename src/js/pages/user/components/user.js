import React from 'react'
import Info from './info'
import Repositories from './repositories'
import bg from 'src/images/header.jpg'
import {header, avatar, left} from './style.css'

export default ({user, sortRepository = () => {}}) => {
  console.log(user)
  return (
    <div>
      <div className="db">
        <div className={`${header} overflow-hidden cover`} style={{backgroundImage:`url(${bg})`}}>
          <div className="ma4 white">
            <h1 className="f2-l lh-solid">{user.name}</h1>
          </div>
        </div>
        <div className="relative mh4">
          <div className={`w-30 ${left} dib`}>
            <img src={user.avatar_url} className={`br-100 ${avatar}`} />
            <Info user={user} />
          </div>
          <div className={`w-70 dib`}>
            <h2>Repository List</h2>
            <label>Sort by</label>
            <select>
              <option value="StarsDesc">By Stars (DESC)</option>
              <option value="StarsAsc">By Stars (ASC)</option>
              <option value="WatchersDesc">By Watchers (DESC)</option>
              <option value="WatchersAsc">By Watchers (ASC)</option>
              <option value="ForksDesc">By Forks (DESC)</option>
              <option value="ForksAsc">By WatchForksers (ASC)</option>
            </select>
            <Repositories repositories={user.repositories} />
          </div>
        </div>
      </div>
    </div>
  )
}
