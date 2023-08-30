# Two City Scheduling

## Alias
- Leetcode (1029): [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)

## Problem
A company is planning to interview `2n` people. Given the array costs where `costs[i] = [aCosti, bCosti]`, the cost of flying the `ith` person to city `a` is `aCosti`, and the cost of flying the `ith` person to city `b` is `bCosti`.

Return the minimum cost to send n persons to city A and n persons to city B

## Examples
- Example 1
   - Input
     ```
     costs = [[10,20],[30,200],[400,50],[30,20]]
     ```
   - Output
     ```
     110
     ```
   - Explanation
      - The first person goes to city A for a cost of 10.
      - The second person goes to city A for a cost of 30.
      - The third person goes to city B for a cost of 50.
      - The fourth person goes to city B for a cost of 20.
      - The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
    
## Solutions
- **Solution 1**
   - Idea
      - Send all the people to city `a` and calculate the cost.
      - Calculate the refund if send all the people to city `b`.
      - Sort the refund array in ascending order.
      - Pick the first `n` elements from the refund array and add to the cost if send all the people to city `a`.

  ```java
  public int twoCitySchedCost(int[][] costs) {
      int N = costs.length / 2;
      int[] refund = new int[N * 2];
      int costToA = 0;

      for(int i = 0; i < 2 * N; i++){
          costToA += costs[i][0];                // calculate the cost if send all the people to city a
          refund[i] = costs[i][1] - costs[i][0]; // calculate the refund if send all the people to city b
      }

      Arrays.sort(refund);

      // pick first N elements from refund array
      // add to the cost of sending all the people to city a
      for(int i = 0; i < N; i++){
          costToA += refund[i];
      }
      return costToA;
  }
  ```  
