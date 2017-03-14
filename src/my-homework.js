import {addArray} from './bedmas'

export const sum = ary => {
  return addArray(ary)
}

export const multiply = (ary, func) => func(ary)