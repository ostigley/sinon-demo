import {expect, assert} from 'chai'
import sinon from 'sinon'
import { multiply } from '../src/my-homework'
// To stub a the 'add' method from the bedmas module:
import * as bedmas from '../src/bedmas.js'



describe('Spying on a function', () => {
  describe('multiply function', () => {
    const ary = [1,2,3]

    // Let's create a function that will tell us if it is called:
    const spy = sinon.spy()

    //We know the multpiply function takes a function as a parameter...

    it('returns true, because our spy function was called', () => {
      multiply(ary, spy)
      expect(spy.called).to.be.true
    })

  })
})