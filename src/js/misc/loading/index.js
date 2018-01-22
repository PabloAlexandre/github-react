import React from 'react'
import {loading, inner, spinner, cube1, cube2, text as loadingText} from './style.css'

export default ({text= 'Carregando'}) => (
  <div className={loading}>
    <div className={inner}>
      <div className={spinner}>
        <div className={cube1}></div>
        <div className={cube2}></div>
      </div>
      <p className={`center mt5 ${loadingText}`}>{text}</p>
    </div>
  </div>
)
