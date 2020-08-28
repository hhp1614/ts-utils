import { randomNum } from '../../../src/common/random'

describe('common/random:randomNum', () => {
  test('randomNum()', () => {
    for (let i = 0; i < 1000; i++) {
      const random = randomNum(10, 20)
      expect(10 <= random && random <= 20).toBeTruthy()
    }

    for (let i = 0; i < 1000; i++) {
      const random = randomNum(10.5, 20.5)
      expect(10 <= random && random <= 20).toBeTruthy()
    }
  })

  test('randomNum():min', () => {
    // @ts-ignore
    const fn = () => randomNum('10', 20)
    expect(fn).toThrow('`min` 必须是数字')
  })

  test('randomNum():max', () => {
    // @ts-ignore
    const fn = () => randomNum(10, '20')
    expect(fn).toThrow('`max` 必须是数字')
  })

  test('randomNum():min < max', () => {
    const fn = () => randomNum(10, 5)
    expect(fn).toThrow('`min` 应该小于 `max`')
  })
})
