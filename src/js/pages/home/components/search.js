import React from 'react'
import {inputText} from '../style.css'

export default ({onChange = () => {}, onSearch = () => {}}) => (
  <div>
    <input type="text" onChange={onChange} className={`w-100 pa3 ${inputText}`} />
    <button onClick={onSearch}>Search</button>
  </div>
)
