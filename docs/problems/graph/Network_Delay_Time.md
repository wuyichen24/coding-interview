# Network Delay Time

## Alias
- Leetcode (743): [Network Delay Time](https://leetcode.com/problems/network-delay-time/)

## Problem
You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (ui, vi, wi)`, where `ui` is the source node, `vi` is the target node, and `wi` is the time it takes for a signal to travel from source to target.

We will send a signal from a given node `k`. **Return the minimum time it takes for all the `n` nodes to receive the signal**. If it is impossible for all the `n` nodes to receive the signal, return `-1`.

## Examples
- Example 1

  ![931_example_1](https://github.com/wuyichen24/coding-interview/assets/8989447/889745b4-37f4-4647-94c0-ba4075cb2ca9)

   - Input
     ```
     times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
     ```
   - Output
     ```
     2
     ```
- Example 2
   - Input
     ```
     times = [[1,2,1]], n = 2, k = 1
     ```
   - Output
     ```
     1
     ```
- Example 3
   - Input
     ```
     times = [[1,2,1]], n = 2, k = 2
     ```
   - Output
     ```
     -1
     ```

## Solutions
- Solution 1: BFS with priority queue
   - Idea
      - Use priority queue instead of queue for a standard BFS.
   - Steps
      - Build the graph.
      - Create a priority queue, sort nodes by the distance from node k to the current node ascending (always getting the node with minimal distance with node k).
      - Execute the rest of BFS.   

  ```java
  class Solution {
      public int networkDelayTime(int[][] times, int N, int K) {
          // build the graph
          Map<Integer, Map<Integer,Integer>> map = new HashMap<>();
          for(int[] time : times){
              map.putIfAbsent(time[0], new HashMap<>());
              map.get(time[0]).put(time[1], time[2]);
          }
        
          // create priority queue
          // int[0] is the distance from node k to the current node
          // int[1] is the node number
          // sort by distance ascending
          Queue<int[]> pq = new PriorityQueue<>((a,b) -> (a[0] - b[0]));
        
          pq.add(new int[]{0, K});
        
          boolean[] visited = new boolean[N+1];
          int res = 0;
        
          while(!pq.isEmpty()){
              int[] cur = pq.remove();       // always getting the node with minimal distance with node k
              int curNode = cur[1];          // current node
              int curDist = cur[0];          // distance from node k to current node
              if(visited[curNode]) continue;
              visited[curNode] = true;
              res = curDist;
              N--;
              if(map.containsKey(curNode)){
                  for(int next : map.get(curNode).keySet()){
                      pq.add(new int[]{curDist + map.get(curNode).get(next), next});
                  }
              }
          }
          return N == 0 ? res : -1;   
      }
  }
  ```

