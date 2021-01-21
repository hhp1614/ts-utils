import { sort } from '../../../src/common/collection'

describe('common/collection:sort', () => {
  test('sort():number[]', () => {
    const source = [3, 1, 5, 4, 2]
    const asc = JSON.stringify([1, 2, 3, 4, 5])
    const desc = JSON.stringify([5, 4, 3, 2, 1])

    const a = sort(source)
    expect(JSON.stringify(a)).toBe(asc)
    expect(a === source).toBeTruthy()

    const b = sort(source, 'asc')
    expect(JSON.stringify(b)).toBe(asc)
    expect(b === source).toBeTruthy()

    const c = sort(source, 'desc')
    expect(JSON.stringify(c)).toBe(desc)
    expect(c === source).toBeTruthy()
  })

  test('sort():string[]', () => {
    const source = ['3', '1', '5', '4', '2']
    const asc = JSON.stringify(['1', '2', '3', '4', '5'])
    const desc = JSON.stringify(['5', '4', '3', '2', '1'])

    const a = sort(source)
    expect(JSON.stringify(a)).toBe(asc)
    expect(a === source).toBeTruthy()

    const b = sort(source, 'asc')
    expect(JSON.stringify(b)).toBe(asc)
    expect(b === source).toBeTruthy()

    const c = sort(source, 'desc')
    expect(JSON.stringify(c)).toBe(desc)
    expect(c === source).toBeTruthy()
  })

  test('sort():object', () => {
    const source = { d: 4, b: 2, e: 5, a: 1, c: 3 }
    const asc = JSON.stringify({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    const desc = JSON.stringify({ e: 5, d: 4, c: 3, b: 2, a: 1 })

    const a = sort(source)
    expect(JSON.stringify(a)).toBe(asc)
    expect(a === source).toBeTruthy()

    const b = sort(source, 'asc')
    expect(JSON.stringify(b)).toBe(asc)
    expect(b === source).toBeTruthy()

    const c = sort(source, 'desc')
    expect(JSON.stringify(c)).toBe(desc)
    expect(c === source).toBeTruthy()
  })

  test('sort():Object-Array', () => {
    const source = [
      { id: 4, value: 4 },
      { id: 2, value: 2 },
      { id: 5, value: 5 },
      { id: 1, value: 1 },
      { id: 2, value: 3 }
    ]
    const asc = JSON.stringify([
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 2, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 }
    ])
    const desc = JSON.stringify([
      { id: 5, value: 5 },
      { id: 4, value: 4 },
      { id: 2, value: 3 },
      { id: 2, value: 2 },
      { id: 1, value: 1 }
    ])

    const a = sort(source, 'asc', 'id')
    expect(JSON.stringify(a)).toBe(asc)
    expect(a === source).toBeTruthy()

    const c = sort(source, 'desc', 'id')
    expect(JSON.stringify(c)).toBe(desc)
    expect(c === source).toBeTruthy()
  })

  test('sort():other', () => {
    expect(JSON.stringify(sort([3, '1', 4, '2']))).toBe(
      JSON.stringify(['1', '2', 3, 4])
    )
    expect(JSON.stringify(sort([3, '', 4, '2']))).toBe(
      JSON.stringify(['', '2', 3, 4])
    )
    const errMessage = '数组的 `item` 必须是 `number` 或 `string`'
    expect(() => sort([1, 2, true, 0])).toThrow(errMessage)
    expect(() => sort([1, 2, [], 0])).toThrow(errMessage)
    expect(() => sort([1, 2, null, 0])).toThrow(errMessage)
    expect(() => sort([1, null, 2, 0])).toThrow(errMessage)
    expect(() => sort([1, undefined, 2, 0])).toThrow(errMessage)
    expect(() => sort([1, () => {}, 2, 0])).toThrow(errMessage)
  })
})
