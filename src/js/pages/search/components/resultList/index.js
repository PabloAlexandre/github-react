import React from 'react'
import User from './../user/'
import Loading from 'misc/loading/'
import {button} from './style.css'
export default ({users = [], loadMore = () => {}, done = true, loading = true}) => {
  const results = users.length > 0 ? users.map((v) => (
    <User key={`search_users_${v.id}`} user={v} />
  )) : ('')

  const loadMoreButton = !done ? (
    <div className="mt3">
      <button className={`center db bn pointer ttu fw7 ph4 pv3 ${button}`} onClick={loadMore}>Load more</button>
    </div>
  ) : ('')

  const loadingComponent = loading ? (
    <Loading />
  ) : ('')

  return (
    <div className="pa3 ">
      {loadingComponent}
      {results}
      {loadMoreButton}
    </div>
  )
}
