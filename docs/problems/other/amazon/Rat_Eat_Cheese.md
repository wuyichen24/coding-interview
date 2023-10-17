# Rat Eat Cheese

## Problem
Given a n*n grid where each cell has one of three values :
- 0 represents an empty cell
- 1 represents there is a cheese in the cell
- 2 represents there is a rat in the cell.

Now the rat has a special ability that he can clone himself four times and go upward(i-1, j), right(i, j+1), down(i+1, j), left(i, j-1). The rat will only go to the given directions if a cheese is in there in the cell he can go all for directions and eat in 1 second.

Find the minimum time he needs to eat all Cheese available in the grid.

If it is impossible to eat all the cheese then return -1.

### Input Format
- The first line contains an integer n representing the size of the array,
- Then there are n lines which contains n space separated integers representing the array grid.

### Output Format
Return minimum time required to eat all cheese available.

### Examples
- Example 1
   - Input
     ```
     3
     2 1 1
     1 1 0
     0 1 1
     ```
   - Output
     ```
     4
     ```
   - Explanation :
      - The rat will start at index [0, 0]. At one second, he will go to [0,1], [1,0], [1,1]. In the second step, he will go from [0,1] to [0,2]. In the third step, he will go from [1,1] to [2,1]. And lastly, in the 4th step, he will go from [2,1] to [2,2].

- Example 2
   - Input
     ```
     3
     2 1 1
     0 1 1
     1 0 1
     ```  
   - Output
     ```
     -1
     ```
   - Explanation
      - The rat will start at [0, 0], then it'll go to [1, 0], next it'll go [0, 2], [1, 1], after that it'll go to [1, 2] and in the end to [2,2].
      - But at index [2,0], one cheese will be left, so it'll return -1.
