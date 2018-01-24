import React, {Component} from 'react'
import {connect} from 'react-redux'
import { SearchUser } from './requests'
import { SET_USER_LIST, SET_PAGE, SET_COMPLETED } from './reducer'
import ResultList from './components/resultList/'
import Header from './components/header/'

export class Search extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    const {match: {params: {query: term}}, users} = this.props
    if(users.length <= 0) await this.load(term, 1)
  }

  async load(term, page = false){
    const {page: currentPage, users, done, setUsers, setPage, setCompleted} = this.props
    if(done || page == currentPage) return

    setPage(page)
    const response = (await SearchUser(term, page)).data
    setUsers(response.items, response.total_count)

    if(response.total_count == users.length + response.items.length){
      setCompleted(true)
    }
  }

  render(){
    const {match: {params: {query: term}}, users, total, page, done, loading} = this.props
    const loadMore = () => this.load(term, page + 1)

    return (
      <div>
        <Header term={term} total={total} />
        <ResultList done={done} loading={loading} users={users} loadMore={loadMore} />
      </div>
    )
  }
}

export default connect(
  (state) => ({...state.search}),
  (dispatch) => ({
    setUsers: (users, total) => dispatch({type: SET_USER_LIST, value: users, total}),
    setPage: (page) => dispatch({type: SET_PAGE, value: page}),
    setCompleted: (state) => dispatch({type: SET_COMPLETED, value: state})
  })
)(Search)
