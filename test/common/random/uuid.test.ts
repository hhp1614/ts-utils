import { uuid } from '../../../src/common/random'

describe('common/random:uuid', () => {
  test('uuid()', () => {
    expect(uuid()).toMatch(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}/)
  })
})
