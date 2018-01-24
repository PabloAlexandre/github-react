import React from 'react'
import UserInfo from './info'
import UserDetails from './details'
import Repositories from './repositories'
import bg from 'src/images/header_internal_pages.png'
import {header} from './style.css'

export default ({user, changeRepositorySort = () => {}}) => {
  return (
    <div>
      <div className="db">
        <div className={`${header} overflow-hidden cover relative`} style={{backgroundImage:`url(${bg})`}}>
          <UserInfo user={user} />
        </div>

        <div className="relative ph4-l ph3">
          <UserDetails user={user} />
          <Repositories repositories={user.repositories} changeRepositorySort={changeRepositorySort}/>
        </div>
      </div>
    </div>
  )
}
