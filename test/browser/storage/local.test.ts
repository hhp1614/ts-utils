import { Local } from '../../../src/browser/storage'

describe('browser/storage:local', () => {
  test('Local', () => {
    Local.set('foo', 1)
    expect(Local.get('foo')).toBe(1)

    Local.remove('foo')
    expect(Local.get('foo')).toBeNull()

    Local.setPrefix('hhp')
    Local.set('bar', 1)
    expect(Local.get('bar')).toBe(1)

    Local.clear()
    expect(Local.get('bar')).toBeNull()
  })
})
