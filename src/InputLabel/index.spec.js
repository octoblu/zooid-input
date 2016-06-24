import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import InputLabel from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<InputLabel />', () => {
  describe('when given children as prop', () => {
    it('should render the children', () => {
      const sut = shallow(<InputLabel>Labels...</InputLabel>)
      expect(sut).to.contain('Labels...')
    })

    describe('when given required as prop', () => {
      it('should render a "*" at the end of the label', () => {
        const sut = shallow(<InputLabel required>Labels...</InputLabel>)
        expect(sut).to.contain.text('Labels... *')
      })
    })

    describe('when given name as as prop', () => {
      it('should map name to the htmlFor attribute on the label', () => {
        const sut = shallow(<InputLabel name="JohnBosco">ASDF</InputLabel>)
        expect(sut).to.contain(
          <label htmlFor="JohnBosco" className={styles.root}>ASDF</label>
        )
      })
    })
  })

  describe('when children prop is undefined', () => {
    const sut = shallow(<InputLabel />)
    it('should render nothing', () => {
      expect(sut).to.be.empty
    })
  })
})
