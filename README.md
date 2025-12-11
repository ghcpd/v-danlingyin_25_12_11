# Test Coverage Audit — input.ts

Summary
- File audited: `input.ts`
- Primary goal: identify missing test coverage for functions, branches and fallbacks.

What I identified (coverage gaps)
- `getUserRole` (lines 3-11)
  - Missing branches:
    - user is undefined -> returns "guest" (fallback)
    - user.role is falsy -> returns "unknown" (fallback)
    - user.role present -> returns provided role
  - Why: these branches determine returned role values used by callers (authorization/UX); fallbacks must be validated.

- `calculateDiscount` (lines 13-26)
  - Missing branches:
    - price < 0 -> throws Error("Invalid price") (error path)
    - level === "gold" -> applies 20% discount
    - level === "silver" -> applies 10% discount
    - default -> returns full price (fallback)
  - Why: pricing logic and error handling directly affect billing and must be verified.

Files added
- `coverage.json` — machine-readable report of the gaps.
- `tests/input.test.ts` — minimal TypeScript test suite (vitest).
- `package.json` — adds `npm test` script (`vitest run`).
- `tsconfig.json` — TypeScript config for tests.

How to run tests
1. Install dependencies:
   npm install
2. Run tests:
   npm test

What tests cover (why added)
- Tests exercise every missing branch identified above: fallbacks, error path, and each discount tier. They ensure behavioral stability for role resolution and pricing.

Expected output
- On success: tests should PASS. Example summary (vitest):
  PASS  tests/input.test.ts (4 tests for calculateDiscount, 3 for getUserRole)

Notes
- I did not invent or modify any functions. All tests target existing code paths only.
- `coverage.json` contains the exact structured report produced during this audit.
