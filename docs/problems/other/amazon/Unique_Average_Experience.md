# Unique Average Experience

## Problem
There are *n* developers working at Amazon where the *i<sup>th</sup>* developer has the experience points *experience[i]*. The company decided to pair the developers by iteratively pairing the developers with the highest and lowest remaining experience points for a hackathon. The *combined experience* of a pair is the average of the experience points of the two developers. Find the number of unique values among the combined experience of the pairs formed.

### Example
*experience = [1, 4, 1, 3, 5, 6]*

There are n = 6 developers. The pairs formed are (1,6), (1,5), and (4,3) making their experience points 3.5, 3, and 3.5 respectively. There are 2 distinct values, 3 and 3.5, so return 2 as the answer.

### Function Description
Complete the function *findUniqueValues* in the editor below.

*findUniqueValues* has the following parameter:
- int experience[n]: the experience points for each developer

### Returns
- int: the number of unique values among the combined experience points of the pairs formed

### Constraints
- 2 <= n <= 10<sup>5</sup>
- n is an even number
- 1 <= experience[i] <= 10<sup>9</sup>

## Examples
- Example 1
   - Input
     ```
     [1,1,1,1,1,1]
     ```
   - Output
     ```
     1
     ```
- Example 2
   - Input
     ```
     [1,100,10,1000]
     ```
   - Output
     ```
     2
     ```
