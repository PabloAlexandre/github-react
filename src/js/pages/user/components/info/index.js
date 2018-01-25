import React from 'react'
import {number, bar, topics, informations, icons} from './style.css'

const Topic = ({name, value}) => (
  <h2 className="dib mh3 tc fw3"><div className={`${number} fw7`}>{value}</div> {name}</h2>
)

const Information = ({icon, value}) => (
  <div className="dib mh1 mh3-l">
    <p className="ma0">
      <i className={`dib fa fa-${icon} ${icons} v-middle mr2`}></i>
      <span className="v-middle dib">{value}</span>
    </p>
  </div>
)
export default ({user}) => (
  <div>
    <div className={`${topics} absolute pr4`}>
      <Topic name="repositories" value={user.public_repos} />
      <Topic name="followers" value={user.followers} />
      <Topic name="following" value={user.following} />
    </div>
    <div className={`${bar} absolute w-100 bottom-0 pr4`}>
      <div className={` ${informations}`}>
        <Information icon="github-alt" value={user.login} />
        <Information icon="map-marker" value={user.location} />
        <Information icon="laptop" value={user.blog} />
      </div>
    </div>
  </div>
)
