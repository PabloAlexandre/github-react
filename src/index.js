import React from 'react'
import reactDOM from 'react-dom'
import Wrapper from './js/index'
import { AppContainer } from 'react-hot-loader'

const render = (App) => {
  reactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Wrapper)

if(module.hot){
  module.hot.accept('./js/index', () => {
    render(Wrapper)
  })
}
