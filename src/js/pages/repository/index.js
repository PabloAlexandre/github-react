import React, {Component} from 'react'
import {connect} from 'react-redux'
import RepositoryWrapper from './components/'
import {SET_REPOSITORY, SET_COMMITS} from './reducer'
import {LoadRepository} from './requests'

export class Repository extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    const {setInformation, setCommits, match: {params: {username, repository}}} = this.props
    const fullname = `${username}/${repository}`
    const response = await LoadRepository(fullname)
    setInformation(response[0].data)
    setCommits(response[1].data)
  }

  render(){
    const {repositoryInfo, commits} = this.props
    return (
      <div>
        <RepositoryWrapper info={repositoryInfo} commits={commits} />
      </div>
    )
  }
}

export default connect(
  (state) => ({...state.repository}),
  (dispatch) => ({
    setInformation: (repository) => dispatch({type: SET_REPOSITORY, value: repository}),
    setCommits: (commits) => dispatch({type: SET_COMMITS, value: commits}),
  })
)(Repository)
