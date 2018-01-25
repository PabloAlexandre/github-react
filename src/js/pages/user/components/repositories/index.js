import React from 'react'
import {Link} from 'react-router-dom'
import {item, marker} from './style.css'

const RepositoryItem = ({repository}) => (
  <div className={`br2 ba b--black-10 mv2 w-100 pa3 center relative ${item}`}>
    <Link to={`/repository/${repository.full_name}`} className="white no-underline">
      <p className="ma0 fw7">{repository.name}</p>
      <p><span className={`br-100 ${marker}`}></span>{repository.language || 'No Language'}</p>
      <p><span className={`br-100 ${marker}`}></span>{repository.license ? repository.license.name : 'No license'}</p>
      <div className="absolute right-1 top-0">
        <p className="dib mr3"><i className="fa fa-star"></i> {repository.stargazers_count}</p>
        <p className="dib mr3"><i className="fa fa-code-fork"></i> {repository.forks_count}</p>
        <p className="dib mr3"><i className="fa fa-eye"></i> {repository.stargazers_count}</p>
      </div>
    </Link>
  </div>
)

export default ({repositories = [], changeRepositorySort}) => {
  const render = (repositories.map((v) => (
    <RepositoryItem key={`repositories_list_${v.id}`} repository={v} />
  )))

  return (
    <div className={`w-100 w-70-l dib pl4-l ph0 mt4 mt0-l`}>
      <h2 className="black">Repository List</h2>
      <select onChange={changeRepositorySort} className="bn pa2 w-100 w-auto-l">
        <option value="stargazers_desc">By Stars (DESC)</option>
        <option value="stargazers_asc">By Stars (ASC)</option>
        <option value="watchers_desc">By Watchers (DESC)</option>
        <option value="watchers_asc">By Watchers (ASC)</option>
        <option value="forks_desc">By Forks (DESC)</option>
        <option value="forks_asc">By Forks (ASC)</option>
      </select>
      {render}
    </div>
  )
}
