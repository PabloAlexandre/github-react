import React from 'react'
import reactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './js/index'

const render = (Component) => {
  reactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if(module.hot){
  module.hot.accept('./js/index', () => {
    render(App)
  })
}
