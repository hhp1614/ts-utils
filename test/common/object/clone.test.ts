import { clone } from '../../../src/common/object'

describe('common/object:clone', () => {
  test('clone()', () => {
    const a = { b: { c: { d1: 1, d2: '2', d3: Object(3), d4: Object('4') } } }
    const b = clone(a)
    expect(b).toEqual(a)

    a.b.c.d1 = 11
    a.b.c.d2 = '22'
    a.b.c.d3 = Object(33)
    a.b.c.d4 = Object('44')
    expect(b).toEqual({
      b: { c: { d1: 1, d2: '2', d3: Object(3), d4: Object('4') } }
    })

    const fn = () => 1
    const oFn = { fn1: fn, fn2: fn }
    const cFn = clone(oFn) as typeof oFn
    expect(cFn.fn1).toEqual(cFn.fn2)
    expect(cFn.fn1 === cFn.fn2).toBeTruthy()
  })
})
