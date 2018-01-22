import React from 'react'
import {Link} from 'react-router-dom'

const RepositoryItem = ({repository}) => (
  <Link to={`/repositories/${repository.id}`}>
    <div className="br2 ba dark-gray b--black-10 mv2 w-100 pa3 center">
      <p>{repository.name}</p>
      <p>Forks: {repository.forks_count}</p>
      <p>Stars: {repository.stargazers_count}</p>
      <p>Watchers: {repository.stargazers_count}</p>
    </div>
  </Link>
)
export default ({repositories = []}) => {
  const render = (repositories.map((v) => (
    <RepositoryItem key={`repositories_list_${v.id}`} repository={v} />
  )))

  return (
    <div>
      {render}
    </div>
  )
}
