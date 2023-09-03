# Course Schedule II

## Alias
- Leetcode (210): [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

## Problem
There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

**Return the ordering of courses you should take to finish all courses**. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

## Examples
- Example 1
   - Input
     ```
     numCourses = 2
     prerequisites = [[1,0]]
     ```
   - Output
     ```
     [0,1]
     ```
   - Explanation
      - There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is `[0,1]`.
- Example 2
   - Input
     ```
     numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
     ```
   - Output
     ```
     [0,2,1,3]
     ```
   - Explanation
      - There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
      - So one correct course order is `[0,1,2,3]`. Another correct ordering is `[0,2,1,3]`.
    
## Solutions
- Solution 1: Using node indegree
   - Idea
      - We first process all the nodes/course with 0 in-degree implying no prerequisite courses.
      - If we remove all these courses from the graph, along with their outgoing edges, we can find out the courses/nodes that should be processed next. These would again be the nodes with 0 in-degree.
      - We can continuously do this until all the courses have been accounted for.
    
  ```java
  public int[] findOrder(int numCourses, int[][] prerequisites) {
      boolean isPossible = true;
      Map<Integer, List<Integer>> adjList = new HashMap<Integer, List<Integer>>();
      int[] indegree = new int[numCourses];
      int[] topologicalOrder = new int[numCourses];

      // Create the adjacency list representation of the graph
      for (int i = 0; i < prerequisites.length; i++) {
          int dest = prerequisites[i][0];
          int src = prerequisites[i][1];
          List<Integer> lst = adjList.getOrDefault(src, new ArrayList<Integer>());
          lst.add(dest);
          adjList.put(src, lst);

          // Record in-degree of each vertex
          indegree[dest] += 1;
      }

      // Add all vertices with 0 in-degree to the queue
      Queue<Integer> q = new LinkedList<Integer>();
      for (int i = 0; i < numCourses; i++) {
          if (indegree[i] == 0) {
              q.add(i);
          }
      }

      int i = 0;
      // Process until the Q becomes empty
      while (!q.isEmpty()) {
          int node = q.remove();
          topologicalOrder[i++] = node;

          // Reduce the in-degree of each neighbor by 1
          if (adjList.containsKey(node)) {
              for (Integer neighbor : adjList.get(node)) {
                  indegree[neighbor]--;

                  // If in-degree of a neighbor becomes 0, add it to the Q
                  if (indegree[neighbor] == 0) {
                      q.add(neighbor);
                  }
              }
          }
      }

      // Check to see if topological sort is possible or not.
      if (i == numCourses) {
          return topologicalOrder;
      }

      return new int[0];
  }
  ```
