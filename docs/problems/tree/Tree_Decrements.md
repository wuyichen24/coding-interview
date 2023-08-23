# Tree Decrements

## Problem
A tree can be represented as an unweighted undirected graph of *t_nodes* nodes numbered from 1 to *t_nodes* and *t_nodes - 1* edges where the i<sup>th</sup> edge connects the nodes numbered *t_from[i]* and *t_to[i]*.

A value *val[i]* is associated with the i<sup>th</sup> node. In a single operation, two nodes can be selected, and their values can be decremented by 1 at a cost equal to the distance between the two nodes, i.e., the number of edges in the simple path between them. It is possible to select the same node for the operation and decrease its value by 2 if the at the cost of 0.

Given the tree, *t*, and the values *val*, find the minimum cost to decrease the values of all the nodes to 0. It is guaranteed that the values of all the nodes can be decreased to exactly 0.

### Example
Suppose *t_nodes* = 3, *t_from = [1, 1], t_to = [2, 3]*, and *val = [3, 1, 2]*.

<img width="187" alt="Screenshot 2023-08-22 at 8 38 52 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/da4a49e3-77b7-4b69-abc2-c1e3667d1cd8">

The optimal strategy is to choose nodes 1 and 2 at cost 1. The values become [2, 0, 2]. Now nodes 1 and 1, followed by 3 and 3, can be chosenm each with a cost of 0. Thus the total cost is 1 + 0 + 0 = 1.

### Function Description
Complete the funciton *getMinCost* in the editor below.

*getMinCost* has the following parameters:
- *int val[t_nodes]*: the values of the nodes
- *int t_nodes*: the number of nodes in the tree
- *int t_from[t_nodes - 1]*: an end of the edge
- *int t_to[t_nodes - 1]*: an end of the edge

### Return
- *int*: the minimum possible cost to decrease all the values to 0

### Constraints
- 2 <= *t_nodes* <= 10<sup>5</sup>
- 1 <= *t_from[i]*, *t_to[i]* <= *t_nodes*
- 0 <= *val[i]* <= 100
- The input guarantees that there always exists a way to pair all the elements in val.

## Examples
- Example 1
   - Input
     ```
     t_nodes = 3
     t_edges = t_nodes - 1 = 2
     t_from = [1, 1]
     t_to = [2, 3]
     val = [2, 1, 1]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The optimal strategy is to choose the nodes (1, 2) and (1, 3). respectively, in the two operations.

      <img width="197" alt="Screenshot 2023-08-22 at 8 53 19 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/199ee1b4-3eb7-4c53-83c0-c50a2a00bdcb">
     
- Example 2
   - Input
     ```
     t_nodes = 5
     t_edges = t_nodes - 1 = 4
     t_from = [1, 1, 3, 5]
     t_to = [2, 3, 4, 5]
     val = [3, 2, 4, 2, 5]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The optimal strategy is to choose nodes (1, 1), (2, 2), (3, 3), (3, 3), (4, 4), (5, 5) and (5, 5) again to get the costs [1, 0, 0, 0, 1]. Now the nodes (1, 5) can be chossen to decrease by 1 at the cost of 2.
    
## Solutions

## References
- [TikTok | OA Coding Questions and Solutions | Set - 2 | 2022](https://www.desiqna.in/6183/tiktok-oa-coding-questions-and-solutions-set-2-2022)
