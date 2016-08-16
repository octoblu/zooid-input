import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'
import FormLabel from 'zooid-form-label'

import styles from './styles.css'
import Input from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Input />', () => {
  describe('when given no props', () => {
    let sut

    beforeEach(() => {
      sut = mount(<Input />)
    })

    it('should set the default props', () => {
      expect(sut).to.have.prop('name', '')
    })

    it('should not render the label', () => {
      expect(sut).to.not.contain(<label htmlFor="someInput" />)
    })
  })

  describe('when given props', () => {
    it('should sanitize and merge props on the input component', () => {
      const sut = mount(
        <Input
          className="CustomClassName"
          description="Name your device"
          label="Device Name"
          name="deviceName"
          placeholder="Device name ish..."
        />
      )

      const input = sut.find('input').first()

      expect(input).to.not.have.prop('className', 'CustomClassName')
      expect(input).to.not.have.prop('description', 'Name your device')
      expect(input).to.not.have.prop('label', 'Device Name')

      expect(input).to.have.prop('name', 'deviceName')
      expect(input).to.have.prop('placeholder', 'Device name ish...')
    })
  })

  describe('when given a label', () => {
    it('should render the text input with the label', () => {
      const sut = mount(<Input label="Cats4Ever" />)
      expect(sut.containsMatchingElement(
        <FormLabel>Cats4Ever</FormLabel>
      )).to.equal(true)
    })
  })

  describe('when given a class name', () => {
    it('should add the class name in to the text input', () => {
      const sut = shallow(<Input className="catsAreAwesome" />)
      expect(sut).to.have.className('catsAreAwesome')
    })
  })

  describe('when disabled prop is truthy', () => {
    it('should render the input as disabled', () => {
      const sut = shallow(<Input disabled />)
      expect(sut).to.have.className(styles['is-disabled'])
    })
  })

  describe('when required prop is truthy', () => {
    it('should add the is-required class to the input', () => {
      const sut = shallow(<Input required />)
      expect(sut).to.have.className(styles['is-required'])
    })
  })

  describe('when given description props', () => {
    it('should render the description', () => {
      const sut = mount(<Input description="Cats are awesome" />)
      expect(sut).to.contains.text('Cats are awesome')
    })
  })

  describe('when given no description prop', () => {
    it('should not render the description', () => {
      const sut = mount(<Input />)
      expect(sut.find('span')).to.not.exist
    })
  })
})
