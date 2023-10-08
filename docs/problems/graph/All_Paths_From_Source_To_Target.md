# All Paths from Source to Target

## Alias
- Leetcode (797): [All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)

## Problem
Given a directed acyclic graph (DAG) of `n` nodes labeled from `0` to `n - 1`, **find all possible paths from node `0` to node `n - 1` and return them in any order**.

The graph is given as follows: `graph[i]` is a list of all nodes you can visit from node `i` (i.e., there is a directed edge from node `i` to node `graph[i][j]`).

## Examples
- Example 1
   - Input
     ```
     [[1,2],[3],[3],[]]
     ```
   - Output
     ```
     [[0,1,3],[0,2,3]]
     ```
   - Explanation
      - There are two paths: `0 -> 1 -> 3` and `0 -> 2 -> 3`.
    
     ![all_1](https://github.com/wuyichen24/coding-interview/assets/8989447/5b88bef1-65a0-4da4-a862-8f9e41b19772)

- Example 2
   - Input
     ```
     [[4,3,1],[3,2,4],[3],[4],[]]
     ```
   - Output
     ```
     [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
     ```
   - Explanation
     
     ![all_2](https://github.com/wuyichen24/coding-interview/assets/8989447/27f7ed51-c892-441a-a70c-7e00314c2333)

## Solutions
- **Solution 1: DFS**
   - Idea
      - Start from node `0` to traverse all the possible paths.
      - If visit the node `n-1` (target node), save the path to the result list.

  ```java
  class Solution {
      List<List<Integer>> res = new LinkedList<>();

      public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
          LinkedList<Integer> path = new LinkedList<>();
          traverse(graph, 0, path);            // start from node 0
          return res;
      }

      void traverse(int[][] graph, int current, LinkedList<Integer> path) {
          path.addLast(current);                 // add current node to path

          int n = graph.length;
          if (current == n - 1) {                // when current node is the target, save the path
              res.add(new LinkedList<>(path));
          }

          for (int v : graph[current]) {         // traverse to next adjacent nodes
              traverse(graph, v, path);
          }
        
          path.removeLast();                     // remove current node from path
      }
  }
  ```
