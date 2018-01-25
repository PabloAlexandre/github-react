import React from 'react'
import RepositoryDetails from './details'
import CommitTimeline from './timeline'
import bg from 'src/images/header_internal_pages.png'
import {header} from './style.css'

export default ({info, commits}) => {
  const ForkInformation = info.fork ? (<h2 className="f5 f3-l">this repository is a fork of {info.parent.full_name}</h2>) : ''

  return (
    <div>
      <div className="db">
        <div className={`${header} overflow-hidden cover relative tc`} style={{backgroundImage:`url(${bg})`}}>
          <div class="h-100 dt w-100">
            <div class="dtc v-mid tc white ph3 ph4-l">
              <h1 className="f3 f2-l">{info.full_name}</h1>
              {ForkInformation}
              <h3 className='f5 f3-l'>{info.language}</h3>
            </div>
          </div>

        </div>

        <div className="relative ph4-l ph3 black">
          <RepositoryDetails info={info} />
          <CommitTimeline commits={commits} />
        </div>
      </div>
    </div>
  )
}
