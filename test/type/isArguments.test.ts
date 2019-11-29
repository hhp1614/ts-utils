import { isArguments } from '../../src/type';

describe('type: isArguments', () => {
  test('isArguments(): true', () => {
    expect(
      isArguments(function() {
        return arguments;
      }())
    ).toBe(true);
  });
  test('isArguments(): false', () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });
});
