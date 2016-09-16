import React from 'react'
import renderer from 'react-test-renderer'


import Input from './index'

describe('<Input />', () => {
  describe('when given no props', () => {
    it('should render', () => {
      const component = renderer.create(<Input />)
      const tree      = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('when given className prop', () => {
    it('should sanitize and merge props on the input component', () => {
      const component = renderer.create(
        <Input
          className="CustomClassName"
          description="Name your device"
          label="Device Name"
          name="deviceName"
          placeholder="Device name ish..."
        />
      )
      const tree = component.toJSON()

      expect(tree.props.className).toContain('CustomClassName')
      // expect(input).to.not.have.prop('className', 'CustomClassName')
      // expect(input).to.not.have.prop('description', 'Name your device')
      // expect(input).to.not.have.prop('label', 'Device Name')
      //
      // expect(input).to.have.prop('name', 'deviceName')
      // expect(input).to.have.prop('placeholder', 'Device name ish...')
    })
  })

})
