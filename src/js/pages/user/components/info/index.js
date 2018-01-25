import React from 'react'
import {number, bar, topics, informations, icons} from './style.css'

const Topic = ({name, value}) => (
  <h2 className="dib mh3-l mh2 tc fw3 f5 f4-l"><div className={`${number} fw7 f3 f2-l`}>{value}</div> {name}</h2>
)

const Information = ({icon, value}) => (
  <div className="db dib-l mh1 mh3-l tc">
    <p className="ma2 ma0-l">
      <i className={`dib fa fa-${icon} ${icons} v-middle mr2`}></i>
      <span className="v-middle dib f5 f4-l">{value}</span>
    </p>
  </div>
)
export default ({user}) => (
  <div>
    <div className={`${topics} absolute pr4-l`}>
      <Topic name="repositories" value={user.public_repos} />
      <Topic name="followers" value={user.followers} />
      <Topic name="following" value={user.following} />
    </div>
    <div className={`${bar} absolute w-100 bottom-0 pr4-l`}>
      <div className={` ${informations}`}>
        <Information icon="github-alt" value={user.login} />
        <Information icon="map-marker" value={user.location} />
      </div>
    </div>
  </div>
)
