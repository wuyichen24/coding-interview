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
- Recursion with memoization
  ```java
  int fib(int N) {
      int[] memo = new int[N + 1];                 // initialize the memo array as all 0
      return dp(memo, N);                          // recursion with the memo array
  }

  int dp(int[] memo, int n) {
      // base case
      if (n == 0 || n == 1) return n;
      if (memo[n] != 0) return memo[n];            // if the value has been calculated, get the value directly from the memo array
      memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
      return memo[n];
  }
  ```
- Dynamic programming
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
