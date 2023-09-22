# Dynamic programming

## Problems can use this pattern
- Find the maximum/minimum value

## Process
- Find the recursive relationship between the main problem and their subproblems
   - Key points
      - The recursive relationship can be defined either in top-down (from n to 0) or bottom-up (from 0 to n).
   - Examples
      - For [Climbing Stairs](../problems/other/Climbing_Stairs.md), the relationship is `problem(i) = problem(i-1) + problem(i-2)` (top-down).
      - For [House Robber](../problems/array/house_robber/House_Robber.md), the relationship is `problem(i) = Math.max( problem(i-2)+currentValue , problem(i-1) )` (top-down).
- Check we calculate the same subproblem twice.
   - Example
      - If the recursive relationship is `problem(i) = problem(i-1) + problem(i-2)`
      - When the `i = 10`, we calculate `problem(9)` and `problem(8)`. When the `i = 9`, we calculate `problem(8)` and `problem(7)`.
      - You can see that we calculate `problem(8)` twice.

## Problems
- [Climbing Stairs](../problems/other/Climbing_Stairs.md)
- [House Robber](../problems/array/house_robber/House_Robber.md)
- [House Robber II](../problems/array/house_robber/House_Robber_II.md)
- [Maximal Square](../problems/array/2d/Maximal_Square.md)
