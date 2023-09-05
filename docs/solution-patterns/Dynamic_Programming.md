# Dynamic programming

## Process
- Find the recursive relationship between the main problem and their subproblem
   - For [Climbing Stairs](../problems/other/Climbing_Stairs.md), the relationship is `problem(i) = problem(i-1) + problem(i-2)`
   - For [House Robber](../problems/array/house_robber/House_Robber.md), the relationship is `problem(i) = Math.max( problem(i-2)+currentValue , problem(i - 1) )`

## Problems
- [Climbing Stairs](../problems/other/Climbing_Stairs.md)
- [House Robber](../problems/array/house_robber/House_Robber.md)
