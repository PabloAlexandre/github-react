import React from 'react'
import { shallow } from 'enzyme'
import {Home} from '../'
import Search from '../components/search'

describe('Test some home interactions', () => {
  test('Check if my component contains just one search component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Search)).toHaveLength(1)
  })
})
