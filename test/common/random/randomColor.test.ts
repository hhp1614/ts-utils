import { randomColor } from '../../../src/common/random'

describe('common/random:randomColor', () => {
  test('randomColor()', () => {
    const color = randomColor()
    expect(color).toMatch(/^#[0123456789abcdef]{6}/)

    const hex = randomColor('all', 'hex')
    expect(hex).toMatch(/^#[0123456789abcdef]{6}/)

    const rgb = randomColor('all', 'rgb')
    expect(rgb).toMatch(/^rgb\(\d+,\d+,\d+\)$/)
  })

  test('randomColor():dark', () => {
    const hex = randomColor('dark', 'hex')
    expect(hex).toMatch(/^#[01234abc]{6}/)

    const rgb = randomColor('dark', 'rgb')
    expect(rgb).toMatch(/^rgb\(\d+,\d+,\d+\)$/)
  })

  test('randomColor():light', () => {
    const hex = randomColor('light', 'hex')
    expect(hex).toMatch(/^#[56789def]{6}/)

    const rgb = randomColor('light', 'rgb')
    expect(rgb).toMatch(/^rgb\(\d+,\d+,\d+\)$/)
  })

  test('randomColor():error', () => {
    // @ts-ignore
    const fn1 = () => randomColor('x', 'hex')
    expect(fn1).toThrow('`mode` 必须是 `all` | `dark` | `light`')

    // @ts-ignore
    const fn2 = () => randomColor('all', 'x')
    expect(fn2).toThrow('`type` 必须是 `hex` | `rgb`')
  })
})
