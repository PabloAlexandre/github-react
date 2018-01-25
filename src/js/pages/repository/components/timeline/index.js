import React from 'react'
import {commit_item, marker} from './style.css'

const Commit = ({commit: {commit}}) => {
  return (
    <div className={`${commit_item} pl4 relative`}>
      <span className={`${marker} br-100`}></span>
      <h3 className={`ma0 pb3`}>{commit.author.name}</h3>
      <h4 className={`ma0 pb3`}>{commit.message}</h4>
      <small className={`ma0 pb5 db`}>{commit.author.date}</small>
    </div>
  )
}

export default ({commits}) => {
  const render = commits.map((v) => (
    <Commit commit={v} key={v.sha} />
  ))
  return (
    <div className={`mt5`}>
      {render}
    </div>
  )
}
