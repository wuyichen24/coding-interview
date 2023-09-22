# Dynamic programming

## Problems can use this pattern
- Find the maximum/minimum value.
- Properties
   - Overlapping subproblems: The same subproblem is calculated more than once.
   - Optimal substructure: Subproblems are independent from each other.

## Process
- **Step 1**: Classify a problem that can be solved by dynamic programming or not.
   - Based on [Problems can use this pattern](#problems-can-use-this-pattern)
- **Step 2**: Define the state.
   - *State*
      - A state can be defined as the set of parameters that can uniquely identify a certain position or standing in the given problem. This set of parameters should be as small as possible to reduce state space.
   - *Examples*
      - For [Climbing Stairs](../problems/other/Climbing_Stairs.md), the parameter `i` is the state.
      - For [Maximal Square](../problems/array/2d/Maximal_Square.md), the parameters `i` and `j` is the state.
- **Step 3**: Formulate the state transition equation.
   - *State transition*
      - The relationship between the main problem and its subproblems
      - The relationship can be defined either top-down (from n to 0) or bottom-up (from 0 to n).
   - *Examples*
      - For [Climbing Stairs](../problems/other/Climbing_Stairs.md), the equation is `problem(i) = problem(i-1) + problem(i-2)` (top-down).
      - For [House Robber](../problems/array/house_robber/House_Robber.md), the equation is `problem(i) = Math.max( problem(i-2)+currentValue , problem(i-1) )` (top-down).
- **Step 4**: Adding memoization or tabulation for the state.
   - Use memoization or tabulation to store the results of subproblems, avoid the same subproblem being calculated multiple times.

## Template
```
// calculate the base case
dp[0][0][...] = base case

// calculate the state transition
for i in all possible values in division1：
    for j in all possible values in division2：
        for ...
            dp[i][j][...] = max/min(choice1，choice2...)
```

## Multiple solutions
One dynamic programming problem can be solved by multiple solutions:
- Recursion
  ```java
  int fib(int n) {
      if (n == 1 || n == 2) return 1;
      return fib(n - 1) + fib(n - 2);
  }
  ```
- Recursion with memoization (top-down)
  ```java
  int fib(int n) {
      int[] memo = new int[n + 1];                 // initialize the memo array as all 0
      return dp(memo, n);                          // recursion with the memo array
  }

  int dp(int[] memo, int n) {
      // base case
      if (n == 0 || n == 1) return n;
      if (memo[n] != 0) return memo[n];            // if the value has been calculated, get the value directly from the memo array
      memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
      return memo[n];
  }
  ```
- Dynamic programming (bottom-up)
  ```java
  public int fib(int n) {
      if (n <= 1) {
          return N;
      }
                  
      int[] dp = new int[n + 1];
      dp[1] = 1;
      for (int i = 2; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
      }
    
      return dp[n];
  }
  ```

## Problems
- [Climbing Stairs](../problems/other/Climbing_Stairs.md)
- [House Robber](../problems/array/house_robber/House_Robber.md)
- [House Robber II](../problems/array/house_robber/House_Robber_II.md)
- [Maximal Square](../problems/array/2d/Maximal_Square.md)

## References
- [GeeksforGeeks | Steps for how to solve a Dynamic Programming Problem](https://www.geeksforgeeks.org/solve-dynamic-programming-problem/)
- [labuladong 的算法笔记 | 动态规划解题套路框架](https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/dong-tai-g-1e688/)
