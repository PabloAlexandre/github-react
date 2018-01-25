import React, {Component} from 'react'
import {connect} from 'react-redux'
import { SearchUser } from './requests'
import { SET_USER_LIST, SET_PAGE, SET_COMPLETED, RESET_SEARCH } from './reducer'
import ResultList from './components/resultList/'
import Header from './components/header/'

export class Search extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    const {match: {params: {query}}, term, reset} = this.props
    if(term != query) {
      reset(query)
      await this.load(query)
    }
  }

  async load(query){
    const {setUsers, setPage, setCompleted} = this.props

    if(query){
      setPage(1)
      const response = (await SearchUser(query, 1)).data
      setUsers(response.items, response.total_count)
      setCompleted((response.total_count == response.items.length))
    } else {
      const {page: currentPage, users, done, term} = this.props
      if(done) return

      setPage(currentPage + 1)
      const response = (await SearchUser(term, currentPage + 1)).data
      setUsers(response.items, response.total_count)
      setCompleted((response.total_count ==users.length + response.items.length))
    }
  }

  render(){
    const { users, total, done, loading, term} = this.props
    const loadMore = () => this.load()
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
    reset: (term) => dispatch({type: RESET_SEARCH, term}),
    setUsers: (users, total) => dispatch({type: SET_USER_LIST, value: users, total}),
    setPage: (page) => dispatch({type: SET_PAGE, value: page}),
    setCompleted: (state) => dispatch({type: SET_COMPLETED, value: state})
  })
)(Search)
