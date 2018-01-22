import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GetUser, GetRepositories} from './requests'
import {sortObject} from 'misc/helpers'
import {SET_REPOSITORIES, SET_USER, SET_CURRENT_USER} from './reducer'
import UserComponent from './components/user'

export class User extends Component {
  constructor(props){
    super(props)
    this.changeRepositorySort = this.changeRepositorySort.bind(this)
  }

  async componentDidMount(){
    const {setCurrent, setUser, match: {params: {username}}} = this.props
    const response = (await GetUser(username)).data
    setUser(response)
    setCurrent(username)

    this.loadRepositories(username)
  }

  changeRepositorySort({target: {value}}){
    const {current, setRepository, setCurrent, current: {login: username}} = this.props
    const [sortBy, asc] = value.split('_')
    setRepository(username, sortObject(current.repositories, `${sortBy}_count`, asc == 'asc'))
    setCurrent(username)
  }

  async loadRepositories (username, sortBy = 'stargazers', asc = false) {
    const {setRepository, setCurrent} = this.props
    const response = (await GetRepositories(username)).data
    setRepository(username, sortObject(response, `${sortBy}_count`, asc))
    setCurrent(username)
  }


  render(){
    const {current, tab} = this.props
    const render = current ? (
      <UserComponent user={current} tab={tab} changeRepositorySort={this.changeRepositorySort}/>
    ) : ('')

    return (
      <div>
        {render}
      </div>
    )
  }
}

export default connect(
  (state) => ({...state.user}),
  (dispatch) => ({
    setUser: (user) => dispatch({type: SET_USER, value: user}),
    setRepository: (user, repositories) => dispatch({type: SET_REPOSITORIES, user, value: repositories}),
    setCurrent: (user) => dispatch({type: SET_CURRENT_USER, user})
  })
)(User)
