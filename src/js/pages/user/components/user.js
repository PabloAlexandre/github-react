import React from 'react'
import Info from './info'
import Repositories from './repositories'
import {header, avatar, left} from './style.css'

export default ({user, changeRepositorySort = () => {}}) => {
  return (
    <div>
      <div className="db">
        <div className={`${header} overflow-hidden cover`}>
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
            <select onChange={changeRepositorySort}>
              <option value="stargazers_desc">By Stars (DESC)</option>
              <option value="stargazers_asc">By Stars (ASC)</option>
              <option value="watchers_desc">By Watchers (DESC)</option>
              <option value="watchers_asc">By Watchers (ASC)</option>
              <option value="forks_desc">By Forks (DESC)</option>
              <option value="forks_asc">By Forks (ASC)</option>
            </select>
            <Repositories repositories={user.repositories} />
          </div>
        </div>
      </div>
    </div>
  )
}
