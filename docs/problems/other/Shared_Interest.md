# Shared Interest

## Problem
Given a graph of friends who have different interests, determine which groups of friends have the most interests in common. Then use a little math to determine a value to return.

The graph will be represented as a series of nodes numbered consecutively from *1* to *friends_nodes*. Friendship have evolved based on interests which will be represented as weights in the graph. Any members who share the same interest are said to eb connected by that interest. Once the node pairs with with the maximum number of shared interests are determined, multiply the friends_nodes of the resulting node pairs and return the maximal product.

### Example
- *friends_nodes = 4*
- *friends_edges = 5*
- *friends_from = [1,1,2,2,2]*
- *friends_to = [2,2,3,3,4]*
- *friends_weight = [2,3,1,3,4]*

```
From  To  Weight
1     2     2
1     2     3
2     3     1
2     3     3
2     4     4
```

<img width="279" alt="Screenshot 2023-08-22 at 6 04 02 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/9c779afe-b0a6-4468-bdb1-60d0dc02450d">

The graph shows the following connections:
```
  Weight
(Interest)     Connections
    1             2,3
    2             1,2
    3             1,2,3
    4             2,4
```
- Node pair (2,4) shares only 1 interest (4) and node pair (1,3) shares 1 interest (3).
- Node pair (1,2) shares 2 interests (interest 2 and 3) and node pair (2,3) shares also 2 interests (interest 1 and 3). So, the maximum number of shared interests is 2.
- Multiply the friends_nodes of the resulting node pair: *1 x 2 = 2* and *2 x 3 = 6*.
- The maximal product is 6.

### Function Description
Complete the function *maxShared* in the editor below.

*maxShared* has the following parameters(s):
- int *friends_nodes*: number of nodes.
- int *friends_from[friends_edges]*: the first part of node pairs.
- int *friends_to[friends_edges]*: The other part of node pairs.
- int *friends_weight[friends_edges]*: The interests of node pairs.

### Returns:
- int: maximal integer product of all node pairs sharing the most interests.

### Constraints
- *2 <= friends_nodes <= 100*
- *1 <= friends_edges < min(200, <sup>(friends_nodes x (friends_nodes - 1))</sup>/<sub>2</sub>)*
- *1 <= friends_weight[i] <= 100*
- *1 <= friends_from[i], friends_to[i] <= friend_nodes*
- *1 <= friends_weight[i] <= friends_edges*
- *friends_from[i] != friends_to[i]*
- Each pair of friends can be connected by zero or more interests.

## Examples
- Example 1
   - Input
     ```
     friends_nodes = 4
     friends_edges = 5
     friends_from   = [1,1,2,2,2]
     friends_to     = [2,2,3,3,4]
     friends_weight = [1,2,1,3,3]
     ```
   - Output
     ```
     6
     ```
   - Explanation
      - Each pair of *friends_nodes = 4* friends is connected by the following interests:
         - Pair *(1,2)* shares *2* interests (interest *1* and *2*)
         - Pair *(1,3)* shares *1* interest (interest *1*)
         - Pair *(1,4)* shares *0* interests
         - Pair *(2,3)* shares *2* interests (interest *1* and *3*)
         - Pair *(2,4)* shares *1* interest (interest *3*)
         - Pair *(3,4)* shares *1* interest (interest *3*)
      - The pairs connected by the maximal number of interest are *(1,2)* and (2,3). Their respective products are *1 x 2 = 2* and *2 x 3 = 6*. The result is the largest of these values which is 6

     <img width="240" alt="Screenshot 2023-08-22 at 7 29 34 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/ce26762f-14be-4d30-bd7d-7ddfb0e988d7">

## Solutions
- Solution 1
  ```
  public static int maxShared(int friendsNodes, int friendsEdges, int[] friendsFrom, int[] friendsTo, int[] friendsWeight) {
      // create a 2D array to store the number of shared interests for each pair of friends
      int[][] shared = new int[friendsNodes + 1][friendsNodes + 1];

      // iterate through each friendship
      for (int i = 0; i< friendsEdges; i++) {
          shared[friendsFrom[i]][friendsTo[i]] += friendsWeight[i];
          shared[friendsTo[i]][friendsFrom[i]] += friendsWeight[i];
      }

      // initialize variables to track the maximum number of shared interests and the resulting node pairs
      int maxShared = 0;
      int maxFrom = 0;
      int maxTo = 0;

      // iterate through each pair of friends
      for (int i = 1; i <= friendsNodes; i++) {
          for (int j = i + 1; j <= friendsNodes; j++) {
              // check if the current pair of friends has more shared interests than the current maximum
              if (shared[i][j] > maxShared) {
                  maxShared = shared[i][j];
                  maxFrom = i;
                  maxTo = j;
              }
          }
      }

      // multiply the friends_nodes of the resulting node pair and return the maximal product
      return maxFrom * maxTo;
  }
  ```
