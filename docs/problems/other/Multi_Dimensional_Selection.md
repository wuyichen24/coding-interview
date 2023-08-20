# Multi Dimensional Selection

## Problem
Given a 2-d array *arr of size n x m*, a selection is defined as an array of integers such that it contains at least [*m*/2] (roundup) integers from each row of *arr*. The *cost* of the selection is defined as the maximum difference between any two integers of the selection.

Suppose *k* is the minimum cost of all the possible selections for the given 2-d array. Find the maximum value of the product of *k* * the number of integers considered in the selection with the minimum cost.

**Example**

Suppose n= 3, m = 2, and arr = [[1, 2], [3, 4], [8, 9]]

Some of the possible selections are [2, 3, 8], [1, 2, 3, 9], [1, 3, 4, 8, 9] etc. The cost of these selections are 8 - 2 = 6, 9 - 1 = 8, and 8 respectively.

Here the minimum cost of all the possible selections is 6. The possible selections with the cost 6 are [2, 4, 8] and [2, 3, 4, 8]. The maximum value of the required product is obtained using the latter selection i.e. 6 * 4 = 24. Hence the answer is 24.

**Function Description**
Complete the function *getMaxProduct* in the editor below.

*getMaxProduct* has the following parameter:
  *int arr[n][m]*: the given 2-d array

**Returns**
  int: the maximum possible product

**Constraints**
1 <= n <= 10^3
2 <= m <= 10^3
1 <= arr[i][j] <= 10^9

## Examples
- Example 1
   - Input
     ```
     STDIN          FUNCTION
     -----          --------
     3        ->    arr[] size n = 3
     2        ->    arr[][] size m = 2
     2 3      ->    arr = [[2, 3], [1, 2], [4, 3]]
     1 2
     4 3
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - The minimum cost accross all the selections is 1. The optimal selection with cost 1 is [2, 3, 2, 3] with the product 1 * 4 = 4
- Example 2
   - Input
     ```
     STDIN          FUNCTION
     -----          --------
     2       ->    arr[] size n = 2
     3        ->   arr[][] size m = 3
     1 4 3    ->   arr = [[1, 4, 3], [3, 5, 6]]
     3 5 6
     ```
   - Output
     ```
     8
     ```
   - Explanation
      - The minimum cost accross all the selections is 2. The optimal selection with cost 2 is [4, 3, 3, 5] with the product 2 * 4 = 8

## Solutions
