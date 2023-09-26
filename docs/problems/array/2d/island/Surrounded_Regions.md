# Surrounded Regions

## Alias
- Leetcode (130): [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

## Problem
Given an `m x n` matrix board containing `'X'` and `'O'`, capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

(Flip `'O'` region that is fully surrounded by `'X'`)

## Examples
- Example 1
   - Input
     ```
     board = [
       ["X","X","X","X"],
       ["X","O","O","X"],
       ["X","X","O","X"],
       ["X","O","X","X"]]
     ```
   - Output
     ```
     [
       ["X","X","X","X"],
       ["X","X","X","X"],
       ["X","X","X","X"],
       ["X","O","X","X"]]
     ```
   - Explanation
      - Notice that an 'O' should not be flipped if:
         - It is on the border
         - It is adjacent to an 'O' that should not be flipped.
      - The bottom 'O' is on the border, so it is not flipped.
      - The other three 'O' form a surrounded region, so they are flipped.
    
     ![xogrid](https://github.com/wuyichen24/coding-interview/assets/8989447/ee9eb8e4-9535-419b-857d-1c1909a28439)

## Solutions
- **Solution 1: DFS**
   - Idea
      - Check all the border cells.
      - Use DFS to change all the `'0'` cells which connect to border `'0'` cell to a special character, like `'E'` (So they will not be flipped).
      - Traverse all the board and flip:
         - All the `'0' cells to `'X'`.
         - All the `'E'` cells back to `'0'`.
