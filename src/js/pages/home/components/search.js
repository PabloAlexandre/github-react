import React from 'react'
import {inputText, search, title, icon} from './style.css'

const Form = ({onSubmit, children}) => (
  <form className="relative" onSubmit={(e) => {
    e.preventDefault()
    onSubmit()
  }}>
    {children}
  </form>
)

export default ({onChange = () => {}, onSearch = () => {}, value = ''}) => (
  <div className={`w-60-l w-100 w-100-m center ${search} ph4-m ph4 ph0-l`}>
    <h1 className={`fw7 ${title}`}>GitHub <span className="fw3">Search</span></h1>
    <Form onSubmit={onSearch}>
      <input type="text" value={value} onChange={onChange} className={`w-100 pa3 ${inputText}`} />
      <i className={`fa fa-search ${icon}`} onClick={onSearch}></i>
    </Form>
  </div>
)
