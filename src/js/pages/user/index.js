import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SET_REPOSITORIES, SET_USER, SET_LOADING} from './reducer'

import Loading from 'misc/loading/'
import UserComponentWrapper from './components/'

import {sortObject} from 'misc/helpers'
import {GetUser} from './requests'

export class User extends Component {
  constructor(props){
    super(props)
    this.changeRepositorySort = this.changeRepositorySort.bind(this)
  }

  async componentDidMount(){
    const {setLoading, setRepository, setUser, match: {params: {username}}} = this.props

    setLoading(true)

    const response = await GetUser(username)
    setUser(response[0].data)
    setRepository(sortObject(response[1].data, `stargazers_count`, false))
    setLoading(false)
  }

  changeRepositorySort({target: {value}}){
    const {current, setRepository} = this.props
    const [sortBy, asc] = value.split('_')
    setRepository(sortObject(current.repositories, `${sortBy}_count`, asc == 'asc'))
  }

  render(){
    const {current, tab, loading} = this.props
    const render = loading ? (<Loading />) : current ? (
      <UserComponentWrapper user={current} tab={tab} changeRepositorySort={this.changeRepositorySort}/>
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
    setLoading: (state) => dispatch({type: SET_LOADING, value: state}),
    setUser: (user) => dispatch({type: SET_USER, value: user}),
    setRepository: (repositories) => dispatch({type: SET_REPOSITORIES, value: repositories}),
  })
)(User)
