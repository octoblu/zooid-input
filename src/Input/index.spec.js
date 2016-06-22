import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

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
      expect(sut).to.not.contain(<label />)
    })
  })

  describe('when given a name', () => {
    it('should render the text input with the name', () => {
      const sut = mount(<Input name="cats" />)
      expect(sut).to.have.prop('name', 'cats')
    })
  })

  describe('when given a placeholder', () => {
    it('should render the text input with the placeholder', () => {
      const sut = mount(<Input placeholder="Enter Cats Here" />)
      expect(sut).to.have.prop('placeholder', 'Enter Cats Here')
    })
  })

  describe('when given a label', () => {
    it('should render the text input with the label', () => {
      const sut = mount(<Input label="Cats4Ever" />)
      expect(sut).to.have.prop('label', 'Cats4Ever')
    })
  })

  describe('when given a class name', () => {
    it('should add the class name in to the text input', () => {
      const sut = shallow(<Input className="catsAreAwesome" />)
      expect(sut).to.have.className("catsAreAwesome")
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

  describe('when given unspecified props', () => {
    it('should merge the props with <input /> props', () => {
      const sut = mount(<Input required />)
      const inputField = sut.find('input[type="text"]')
      expect(inputField).to.have.prop('required', true)
    })
  })
})
