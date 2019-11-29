import { isSymbol } from '../../src/type';

describe('type: isSymbol', () => {
  test('isSymbol(): true', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });
  test('isSymbol(): false', () => {
    expect(isSymbol('abc')).toBe(false);
  });
});
