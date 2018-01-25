import React from 'react'
import {number, title, button} from './style.css'

const Topic = ({name, value}) => (
  <h2 className="dib mh3 tc fw3 f4 f3-l"><div className={`${number} fw7 f3 f2-l`}>{value}</div> {name}</h2>
)

export default ({info}) => (
  <div>
    <div className="w-100 w-60-l dib v-top tc tl-l">
      <h3 className={`${title} f3 f2-l`}>{info.description}</h3>
      <div className="mv5 mv3-l">
        <a className={`bn pointer ttu fw7 ph4 pv3 ${button}`} href={info.html_url}>See on GitHub</a>
      </div>
    </div>
    <div className={`w-100 w-40-l dib tc tr-l v-top`}>
      <div>
        <Topic name="watchers" value={info.watchers_count} />
        <Topic name="stars" value={info.stargazers_count} />
        <Topic name="forks" value={info.forks_count} />
      </div>
    </div>
  </div>
)
