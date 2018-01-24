import React from 'react'
import {wrapper, title, inner} from './style.css'

export default ({term, total}) => (
  <div className={`${wrapper} `}>
    <div className={`${inner} w-100`}>
      <h1 className={`ma0 tc ${title}`}>"{term}"</h1>
      <p className="ma0 tc">{total} results</p>
    </div>
  </div>
)
