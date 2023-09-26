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
        
        ![Surrounded_Region drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/a0b52fb9-ee93-4d4f-80f3-45f4c83b1c6b)

      - Use DFS to change all the `'0'` cells which connect to border `'0'` cell to a special character, like `'E'` (So they will not be flipped).

        ![Surrounded_Region_2 drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/c8d46af8-2c88-4a84-aef5-e05dc4c15195)

      - Traverse all the board and flip:
         - All the `'0'` cells to `'X'`.
         - All the `'E'` cells back to `'0'`.

        ![Surrounded_Region_3 drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/3de2960e-e977-4f35-b47c-890353b853ab)

  ```java
  public class Solution {
      protected Integer ROWS = 0;
      protected Integer COLS = 0;

      public void solve(char[][] board) {
          if (board == null || board.length == 0) {
              return;
          }
          this.ROWS = board.length;
          this.COLS = board[0].length;

          List<Pair<Integer, Integer>> borders = new LinkedList<Pair<Integer, Integer>>();
          // Step 1). construct the list of border cells
          for (int r = 0; r < this.ROWS; ++r) {
              borders.add(new Pair(r, 0));
              borders.add(new Pair(r, this.COLS - 1));
          }
          for (int c = 0; c < this.COLS; ++c) {
              borders.add(new Pair(0, c));
              borders.add(new Pair(this.ROWS - 1, c));
          }

          // Step 2). mark the escaped cells
          for (Pair<Integer, Integer> pair : borders) {
              this.DFS(board, pair.first, pair.second);
          }

          // Step 3). flip the cells to their correct final states
          for (int r = 0; r < this.ROWS; ++r) {
              for (int c = 0; c < this.COLS; ++c) {
                  if (board[r][c] == 'O')
                      board[r][c] = 'X';
                  if (board[r][c] == 'E')
                      board[r][c] = 'O';
              }
          }
      }

      protected void DFS(char[][] board, int row, int col) {
          if (board[row][col] != 'O')
              return;

          board[row][col] = 'E';
          if (col < this.COLS - 1)
              this.DFS(board, row, col + 1);
          if (row < this.ROWS - 1)
              this.DFS(board, row + 1, col);
          if (col > 0)
              this.DFS(board, row, col - 1);
          if (row > 0)
              this.DFS(board, row - 1, col);
      }
  }


  class Pair<U, V> {
      public U first;
      public V second;

      public Pair(U first, V second) {
          this.first = first;
          this.second = second;
      }
  }
  ```
