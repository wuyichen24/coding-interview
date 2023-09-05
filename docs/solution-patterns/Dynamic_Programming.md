# Dynamic programming

## Process
- Find the recursive relationship between the main problem and their subproblems
   - Key points
      - The recursive relationship can be defined either in top-down (from n to 0) or bottom-up (from 0 to n).
   - Examples
      - For [Climbing Stairs](../problems/other/Climbing_Stairs.md), the relationship is `problem(i) = problem(i-1) + problem(i-2)` (top-down).
      - For [House Robber](../problems/array/house_robber/House_Robber.md), the relationship is `problem(i) = Math.max( problem(i-2)+currentValue , problem(i - 1) )` (top-down).

## Problems
- [Climbing Stairs](../problems/other/Climbing_Stairs.md)
- [House Robber](../problems/array/house_robber/House_Robber.md)
