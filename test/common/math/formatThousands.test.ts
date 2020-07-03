import { formatThousands } from '../../../src/common/math';

describe('common/math:formatThousands', () => {
  test('formatThousands()', () => {
    expect(formatThousands(123456)).toBe('123,456');
    expect(formatThousands(-123456)).toBe('-123,456');
    expect(formatThousands(123456.987654)).toBe('123,456.987654');
    expect(formatThousands(-123456.987654)).toBe('-123,456.987654');

    expect(formatThousands('123456')).toBe('123,456');
    expect(formatThousands('-123456')).toBe('-123,456');
    expect(formatThousands('123456.987654')).toBe('123,456.987654');
    expect(formatThousands('-123456.987654')).toBe('-123,456.987654');
  });

  test('formatThousands():error', () => {
    // @ts-ignore
    const fnObj = () => formatThousands({});
    expect(fnObj).toThrow('`num` 必须是数字或字符串');

    // @ts-ignore
    const fnBool = () => formatThousands(true);
    expect(fnBool).toThrow('`num` 必须是数字或字符串');

    // @ts-ignore
    const fnEmpty = () => formatThousands();
    expect(fnEmpty).toThrow('`num` 必须是数字或字符串');
  });
});
