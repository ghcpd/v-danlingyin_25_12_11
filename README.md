# Test Coverage Audit — input.ts

How to run tests
- Install dev dependencies: npm install
- Run tests: npm test

What coverage gaps were identified
- `getUserRole` (lines 3–11): no tests for `user` undefined (fallback), `user.role` undefined (fallback), and role present.
- `calculateDiscount` (lines 13–26): no tests for negative price error path, `gold`, `silver`, and default branches.

Why tests were added
- To exercise all logical branches and fallback/error paths so behavior is explicit and future regressions are caught.

Expected output
- All tests should PASS. Example summary line from Jest: PASS  tests/input.test.ts

Files added
- `tests/input.test.ts` — minimal tests covering all branches
- `coverage.json` — audit report of missing coverage prior to tests

Notes
- Run `npm test` to verify. If you don't have dependencies installed, run `npm install` first.
