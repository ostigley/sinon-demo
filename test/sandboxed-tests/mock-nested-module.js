import {expect, assert} from 'chai'
import sinon from 'sinon'
import { sum } from '../../src/my-homework'

// To mock a the 'add' method from the bedmas module:
import * as bedmas from '../../src/bedmas.js'



describe('Mocking a nested module', () => {
  describe('Sum function', () => {
    const ary = [1,2,3]
    let sandbox
    let mockedModule

    beforeEach (() => {
      sandbox = sinon.sandbox.create()
      mockedModule = sandbox.mock(bedmas)
    })

    afterEach( () => sandbox.restore())

    it('calls the addArray Method', () => {
      mockedModule.expects('addArray').once()
      sum(ary)
      mockedModule.verify()
    })

    it('returns false, because is original behaviour', () => {
      const answer = sum(ary)
      expect(answer).to.be.false
    })
  })
})