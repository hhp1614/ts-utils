import { Session } from '../../../src/browser/storage'

describe('browser/storage:session', () => {
  test('Session', () => {
    Session.set('foo', 1)
    expect(Session.get('foo')).toBe(1)

    Session.remove('foo')
    expect(Session.get('foo')).toBeNull()

    Session.setPrefix('hhp')
    Session.set('bar', 1)
    expect(Session.get('bar')).toBe(1)

    Session.clear()
    expect(Session.get('bar')).toBeNull()
  })
})
