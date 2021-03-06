import {expect, assert} from 'chai'
import sinon from 'sinon'
import { sum } from '../src/my-homework'
// To stub a the 'add' method from the bedmas module:
import * as bedmas from '../src/bedmas.js'



describe('Stubbing a nested module', () => {
  describe('Sum function', () => {

    const ary = [1,2,3]

    const stubbedObject = sinon.stub(bedmas, 'addArray', () => {
      console.log('          This logging is coming from the stub')
      return true
    })

    it('returns true, because we stubbed it that way', () => {
      const answer = sum(ary)
      expect(answer).to.be.true
    })

    it('return false, because we turned off the stub stub it that way', () => {
      stubbedObject.restore()
      const answer = sum(ary)
      expect(answer).to.be.false
    })

  })
})