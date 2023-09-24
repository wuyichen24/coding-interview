# Coin Change

## Alias
- Leetcode (322): [Coin Change](https://leetcode.com/problems/coin-change/)

## Problem
You are given an integer array `coins` representing coins of different denominations and an integer amount representing a total `amount` of money.

**Return the fewest number of coins that you need to make up that amount**. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

## Examples
- Example 1
   - Input
     ```
     coins = [1,2,5]
     amount = 11
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - `11 = 5 + 5 + 1`
- Example 2
   - Input
     ```
     coins = [2]
     amount = 3
     ```
   - Output
     ```
     -1
     ```

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Use the relationship
        ```
        for each coin in coins:
            recursion(amount) = min(count, recursion(amount-coin) + 1)
        ```
  ```java
  int coinChange(int[] coins, int amount) {
      return dp(coins, amount)
  }

  int dp(int[] coins, int amount) {
      // base case
      if (amount == 0) return 0;
      if (amount < 0) return -1;

      int res = Integer.MAX_VALUE;
      for (int coin : coins) {           
          int subProblem = dp(coins, amount - coin);   // calculate the subproblem
          if (subProblem == -1) continue;              // if no answer, ignore
          res = Math.min(res, subProblem + 1);         // find the best answer among all the subproblems
      }

      return res == Integer.MAX_VALUE ? -1 : res;
  }
  ```

- **Solution 2: Dynamic programming**
   - Idea
      - `dp[i]` is the fewest number of coins for the amount `i`.
      - Initialize each element in the `dp` array as `amount + 1`.
         - You cannot initialize the array as `Integer.MAX_VALUE`, it will cause overflow when calculating `dp[i - coin] + 1`.
      - State transition equation
        ```
        for each coin in coins:
            dp[i] = min(count, 1 + dp[i - coin])
        ```

  ```java
  int coinChange(int[] coins, int amount) {
      int[] dp = new int[amount + 1];
      Arrays.fill(dp, amount + 1);           // fill initial value as amount + 1

      // base case
      dp[0] = 0;
      for (int i = 0; i < dp.length; i++) {  // calculate each value in the dp array
          for (int coin : coins) {
              if (i - coin < 0) {
                  continue;
              }
              dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
          }
      }
      return (dp[amount] == amount + 1) ? -1 : dp[amount];
  }
  ```

        ```
