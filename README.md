# Test Coverage Audit Report

## Overview
This document details the test coverage gaps identified in `input.ts` and provides instructions for running the test suite.

## Coverage Gaps Identified

### Summary
- **Total Functions**: 2
- **Untested Functions**: 2
- **Missing Test Branches**: 7

### Function: getUserRole (lines 3-10)

**Missing Branches:**
1. Line 4-5: Undefined user parameter → returns "guest"
2. Line 7-8: User object without role property → returns "unknown"
3. Line 10: Valid user with role → returns user.role

**Why Tests Required:** This function implements defensive programming with multiple fallback paths. Testing ensures all three execution paths (undefined user, missing role, successful extraction) behave correctly.

### Function: calculateDiscount (lines 12-26)

**Missing Branches:**
1. Line 13-15: Negative price validation → throws Error
2. Line 17-18: Gold tier discount (80% of price)
3. Line 20-21: Silver tier discount (90% of price)
4. Line 23: Default fallback for unknown levels

**Why Tests Required:** This function includes critical error handling and multiple discount logic branches. Each tier and the error case must be verified to prevent incorrect discount calculations.

## How to Run Tests

### Prerequisites
```bash
npm install --save-dev jest @types/jest ts-jest typescript
```

### Configure Jest (package.json)
```json
{
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "testMatch": ["**/tests/**/*.test.ts"]
  }
}
```

### Run All Tests
```bash
npm test
```

### Run with Coverage Report
```bash
npm test -- --coverage
```

## Expected Output

When running `npm test`, all tests should **PASS**:

```
PASS  tests/input.test.ts
  getUserRole
    ✓ should return 'guest' when user is undefined (line 4-5)
    ✓ should return 'unknown' when user exists but role is undefined (line 7-8)
    ✓ should return the user role when both user and role are provided (line 10)
    ✓ should return the user role when role is explicitly set
  calculateDiscount
    ✓ should throw error for negative price (line 13-15)
    ✓ should apply gold discount of 20% (line 17-18)
    ✓ should apply silver discount of 10% (line 20-21)
    ✓ should return original price for unknown level (line 23)
    ✓ should return original price for empty level string
    ✓ should correctly calculate discounts for different prices

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
```

## Test Coverage Details

### Tests for getUserRole
- **Test 1**: Validates fallback when user is undefined
- **Test 2**: Validates fallback when role property is missing
- **Test 3-4**: Validates successful role extraction with different role values

### Tests for calculateDiscount
- **Test 1**: Validates error thrown for invalid (negative) price
- **Test 2**: Validates gold tier discount calculation (20% reduction)
- **Test 3**: Validates silver tier discount calculation (10% reduction)
- **Test 4-5**: Validates default fallback for unknown discount levels
- **Test 6**: Validates calculations work correctly with different price values

## Files Generated

- `coverage.json` - Structured coverage report with summary and branch details
- `tests/input.test.ts` - Jest test suite covering all identified gaps
- `README.md` - This documentation file
