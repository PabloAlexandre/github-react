import React, {Component} from 'react'

export default ({hello = 'Waiting for prospssd'}) => (
  <div>
    <p className='w-80 center'>{hello}</p>
  </div>
)
