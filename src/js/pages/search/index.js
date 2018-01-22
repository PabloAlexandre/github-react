import React, {Component} from 'react'
import {connect} from 'react-redux'
import { SearchUser } from './requests'
import { SET_USER_LIST, SET_PAGE, SET_COMPLETED } from './reducer'
import User from './components/user'
import Loading from 'misc/loading/'

export class Search extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    const {match: {params: {query: term}}, users} = this.props
    if(users.length <= 0){
      await this.load(term, 1)
    }
  }

  async load(term, page = false){
    const {page: currentPage, users, done, setUsers, setPage, setCompleted} = this.props
    if(done || page == currentPage) return

    setPage(page)
    const response = (await SearchUser(term, page)).data
    setUsers(response.items)

    if(response.total_count == users.length + response.items.length){
      setCompleted(true)
    }
  }

  render(){
    const {match: {params: {query: term}}, users, page, done, loading} = this.props

    const render = users.length > 0 ? (
      <div>
        {loading ? (<Loading />) : ('')}
        <p>Loaded Users:  {users.length}</p>
        {users.map((v, i) => (
          <User key={`search_users_${i}`} user={v} />
        ))}

        {!done ? (
          <div className="mt3">
            <button className="w-100 pa3" onClick={() => { this.load(term, page + 1) }}>Load more</button>
          </div>
        ) : (<div></div>)}

      </div>) :
      (<div>No users found</div>)

    return (
      <div className="w-80 center db mv3">{render}</div>
    )
  }
}

export default connect(
  (state) => ({...state.search}),
  (dispatch) => ({
    setUsers: (users) => dispatch({type: SET_USER_LIST, value: users}),
    setPage: (page) => dispatch({type: SET_PAGE, value: page}),
    setCompleted: (state) => dispatch({type: SET_COMPLETED, value: state})
  })
)(Search)
