# Math Basics

## Modulo operation
### How to calculate
- Give 2 integers `x` and `y`, calculate `x % y`
   - Calculation with division
      - If `x >= y`, the final result will be the remainder of `x / y`.
      - If `x < y`, the final result will be `x` directly.
   - Calculation without division
      - If `x >= y`, continue on `x = x - y` until `x < y`.
      - If `x < y`, the final result will be `x` directly.

### Operation law
- **Identity**
   - `(a % n) % n = a % n`
- **Distributive**
   - `(a + b) % n = [(a % n) + (b % n)] % n` (This is applied to problem [Pairs of 2 Songs Divisible By 60](../problems/math/Pairs_Of_2_Songs_Divisible_By_60.md))
   - `ab % n = [(a % n)(b % n)] % n`
- More law, see [Modulo operation - Properties](https://en.wikipedia.org/wiki/Modulo#Properties_(identities))
