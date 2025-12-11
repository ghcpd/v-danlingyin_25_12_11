import { describe, it, expect } from 'vitest';
import { getUserRole, calculateDiscount } from '../input';

describe('getUserRole', () => {
  it('returns "guest" when user is undefined', () => {
    expect(getUserRole()).toBe('guest');
  });

  it('returns "unknown" when user.role is falsy', () => {
    expect(getUserRole({} as any)).toBe('unknown');
    expect(getUserRole({ role: '' })).toBe('unknown');
  });

  it('returns the provided role when present', () => {
    expect(getUserRole({ role: 'admin' })).toBe('admin');
  });
});

describe('calculateDiscount', () => {
  it('throws for negative price', () => {
    expect(() => calculateDiscount(-10, 'gold')).toThrow('Invalid price');
  });

  it('applies gold discount (20%)', () => {
    expect(calculateDiscount(100, 'gold')).toBe(80);
  });

  it('applies silver discount (10%)', () => {
    expect(calculateDiscount(100, 'silver')).toBe(90);
  });

  it('returns full price for unknown level (fallback)', () => {
    expect(calculateDiscount(100, 'bronze')).toBe(100);
  });
});
