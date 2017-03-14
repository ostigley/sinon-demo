import {expect, assert} from 'chai'
import sinon from 'sinon'
import { sum } from '../src/my-homework'

// To mock a the 'add' method from the bedmas module:
import * as bedmas from '../src/bedmas.js'



describe('Mocking a nested module', () => {
  describe('Sum function', () => {
    const ary = [1,2,3]
    const sandbox = sinon.sandbox.create()
    const mockedModule = sandbox.mock(bedmas)

    afterEach( () => sandbox.restore())

    it('calls the addArray Method', () => {
      mockedModule.expects('addArray').once()
      sum(ary)
      mockedModule.verify()
    })
  })
})