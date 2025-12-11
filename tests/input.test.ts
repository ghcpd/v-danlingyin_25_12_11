import { getUserRole, calculateDiscount } from '../input';

describe('getUserRole', () => {
  test('returns guest when user is undefined', () => {
    expect(getUserRole()).toBe('guest');
  });

  test('returns unknown when user has no role', () => {
    expect(getUserRole({} as any)).toBe('unknown');
  });

  test('returns provided role when present', () => {
    expect(getUserRole({ role: 'admin' })).toBe('admin');
  });
});

describe('calculateDiscount', () => {
  test('throws on negative price', () => {
    expect(() => calculateDiscount(-1, 'gold')).toThrow('Invalid price');
  });

  test('applies gold discount', () => {
    expect(calculateDiscount(100, 'gold')).toBe(80);
  });

  test('applies silver discount', () => {
    expect(calculateDiscount(100, 'silver')).toBe(90);
  });

  test('returns full price for unknown level', () => {
    expect(calculateDiscount(100, 'bronze' as any)).toBe(100);
  });
});
