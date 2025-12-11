# Test Coverage Audit for input.ts

How to run tests
- Install dependencies:
```
npm install
```
- Run tests:
```
npm test
```

Coverage gaps identified
- Functions in `input.ts` were initially untested:
  - `getUserRole` ([input.ts](input.ts#L3-L11)) — had 3 branches: `user` undefined, `user.role` missing, `user.role` present.
  - `calculateDiscount` ([input.ts](input.ts#L13-L26)) — had 4 branches: negative price throws, `level === 'gold'`, `level === 'silver'`, `default` fallback.

Why tests were added
- To ensure each branch in both functions is covered, preventing regressions and ensuring expected behavior for edge inputs.

Expected output
- Tests should PASS after running `npm test` when dependencies are installed.
