import { describe, it, expect } from 'vitest';
import { getUserRole, calculateDiscount } from '../input';

describe('getUserRole', () => {
  it('returns guest when user is undefined', () => {
    expect(getUserRole(undefined)).toBe('guest');
  });

  it('returns unknown when user has no role', () => {
    expect(getUserRole({} as any)).toBe('unknown');
  });

  it('returns the user role when present', () => {
    expect(getUserRole({ role: 'admin' })).toBe('admin');
  });
});

describe('calculateDiscount', () => {
  it('throws for negative price', () => {
    expect(() => calculateDiscount(-5, 'gold')).toThrow('Invalid price');
  });

  it('applies gold discount', () => {
    expect(calculateDiscount(100, 'gold')).toBeCloseTo(80);
  });

  it('applies silver discount', () => {
    expect(calculateDiscount(100, 'silver')).toBeCloseTo(90);
  });

  it('returns price unchanged for unknown level', () => {
    expect(calculateDiscount(100, 'bronze')).toBe(100);
  });
});
