import { isElement } from '../../src/type';

describe('type: isElement', () => {
  test('isElement(): true', () => {
    expect(isElement(document.body)).toBe(true);
  });
  test('isElement(): false', () => {
    expect(isElement('<body>')).toBe(false);
  });
});
