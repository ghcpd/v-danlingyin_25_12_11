import { getUserRole, calculateDiscount } from '../input';

describe('getUserRole', () => {
  test('returns "guest" when no user provided', () => {
    expect(getUserRole()).toBe('guest');
  });

  test('returns "unknown" when user has no role', () => {
    expect(getUserRole({})).toBe('unknown');
  });

  test('returns user role when provided', () => {
    expect(getUserRole({ role: 'admin' })).toBe('admin');
  });
});

describe('calculateDiscount', () => {
  test('throws error for negative price', () => {
    expect(() => calculateDiscount(-10, 'gold')).toThrow('Invalid price');
  });

  test('applies gold discount', () => {
    expect(calculateDiscount(100, 'gold')).toBe(80);
  });

  test('applies silver discount', () => {
    expect(calculateDiscount(100, 'silver')).toBe(90);
  });

  test('no discount for other levels', () => {
    expect(calculateDiscount(100, 'bronze')).toBe(100);
  });
});