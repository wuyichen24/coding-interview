# Jump Game IV

## Alias
- Leetcode (1345): [Jump Game IV](https://leetcode.com/problems/jump-game-iv/)

## Problem
Given an array of integers `arr`, you are initially positioned at the first index of the array.

In one step you can jump from index `i` to index:

- `i + 1` where: `i + 1 < arr`.length. (You can jump to the next index)
- `i - 1` where: `i - 1 >= 0`. (You can jump to the previous index)
- `j` where: `arr[i] == arr[j]` and `i != j`. (You can jump to any index which has the same value with the current index)
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.
