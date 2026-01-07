# Test Coverage Audit

## How to Run Tests
1. Install dependencies: `npm install`
2. Run tests: `npm test`

## Coverage Gaps Identified
- `getUserRole`: All branches untested (no user, no role, with role).
- `calculateDiscount`: Error handling for negative price, and all switch cases untested.

## Why Tests Were Added
Tests were added to cover all functions and their branches, including error paths and fallbacks, to ensure complete test coverage.

## Expected Output
All tests should PASS.