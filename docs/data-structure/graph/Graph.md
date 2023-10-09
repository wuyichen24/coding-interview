# Graph

- [**Types**](#types)
- [**Common algorithms**](#common-algorithms)
- [**Strateties**](#strateties)
- [**Common Topics**](#common-topics)

## Terminologies
- **Vertex**
- **Edge**
- **Degree**
   - The degree of a vertex is the number of edges incident to (connected to) that vertex.
- **Indegree**
   - The indegree of a vertex is the number of edges pointing into (arriving at) that vertex.
   - If you don't know where is the starting position for BFS or DFS, you can start from the 0-indegree nodes.
   - Java code example
     ```java
     Map<Integer, Integer> indegree;    // key is the node id, value is the indegree
     Set<Integer> nodes;                // store all the unique nodes
     
     for (int i = 0; i < edges.length; i++) {
         indegree.put(edges[i][1], indegree.getOrDefault(edges[i][1], 0) + 1);
         nodes.add(edges[i][0]);        
         nodes.add(edges[i][0]);
     }

     // add indegree=0 nodes into the map
     for (Integer node : nodes) {
         if (indegree.get(node) == null) {
             indegree.put(node, 0);
         }
     }
     ```
- **Outdegree**
   - The outdegree of a vertex is the number of edges originating from (starting at) that vertex.

## Types
- **Directed graph**
   - A graph that is made up of a set of vertices connected by directed edges
 
     <img width="243" alt="Screenshot 2023-09-06 at 12 18 50 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/afd99d5d-3936-4804-970e-91ed748e8b1e">
  
- **Undirected graph**
   - A graph that is made up of a set of vertices connected by undirected edges

     <img width="351" alt="Screenshot 2023-09-06 at 12 21 54 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/141966e6-a66e-4e27-a2c1-93dc56540fd7">

- **Weighted graph**
   - A graph in which a number (the weight) is assigned to each edge.

     <img width="426" alt="Screenshot 2023-09-06 at 12 24 34 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/e985f57d-e91d-47df-866f-f713472e4fd9">

- **Bipartite graph**
   - a graph whose vertices can be divided into two disjoint and independent sets *U* and *V*, that is, every edge connects a vertex in *U* to one in *V*.

     <img width="423" alt="Screenshot 2023-09-06 at 12 31 09 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/2cb6f697-9fd7-4947-86e5-a75c18d1bf1e">

## Common algorithms
- [Breadth-First Search (BFS)](../../solution-patterns/Breadth_First_Search.md)
- [Depth-First Search (DFS)](../../solution-patterns/Depth_First_Search.md)
- Dijkstra's algorithm
- [Kahn's algorithm](../../problem_patterns/Topological_Sorting.md#kahns-algorithm)

## Representation
### Adjacency list
- **Concepts**
   - Stores each vertex in the graph with the collection of its neighbouring vertices.
   - More common comparing to adjacency matrix.
- **Example**
  
  ![Adjacency_List drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/d2a788d2-7268-4f00-a33c-96b5a93c2ad1)

- **Java code examples**
  ```
  Map<Integer, List<Integer>> graph;         // unweighted graph
  Map<Integer, Map<Integer, Integer>> graph; // weighted graph
  List<Integer>[] graph;
  ```
### Adjacency matrix
- **Concepts**
   - A matrix whose rows and columns are indexed by vertices and whose cells contain a Boolean value that indicates whether an edge is present between the vertices corresponding to the row and column of the cell.
- **Example**

  ![Adjacency_Matrix drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/db161e46-4b2d-40f0-bb0f-8a931dfefad1)
  
- **Java example**
  ```
  boolean[][] matrix
  ```

## Strateties
- **Build the graph representation before executing any algorithm**
   - Reason
      - Before we running any algorithm, it would be better to build the representation (commonly use adjacency list) by map or any key-value pairs structures.
   - Examples
      - Unweighted graph
        ```java
        // edges[a, b] = there is an edge from node a to node b
        function(int[][] edges) {
            Map<Integer, List<Integer>> map = new HashMap<>();
            for (int i = 0; i < edges.length; i++) {
                int from = edges[i][0];
                int to = edges[i][1];
            
                map.putIfAbsent(from, new ArrayList<>());
                map.get(from).add(to);
            }

            /* Continue */
        }
        ```
      - Weighted graph
        ```java
        // edges[a, b, w] = there is an edge from node a to node b and its weight is w
        function(int [][] edges) {
            Map<Integer, Map<Integer, Integer>> map = new HashMap<>();
            for (int i = 0; i < edges.length; i++) {
                int from   = edges[i][0];
                int to     = edges[i][1];
                int weight = edges[i][2];

                map.putIfAbsent(from, new HashMap<>());
                map.get(from).put(to, weight);
            }

            /* Continue */
        }
        ````
- **For recording the nodes you have been visited, consider use `HashSet` to store the name of the visited nodes**.
  ```java
  Set<Integer> visited = new HashSet<>();
  ```
- **If you don't know where is the starting position for BFS or DFS, you can start from the 0-indegree nodes**
  ```java
  Map<Integer, Integer> indegree;    // key is the node id, value is the indegree
  Set<Integer> nodes;                // store all the unique nodes
     
  for (int i = 0; i < edges.length; i++) {
      indegree.put(edges[i][1], indegree.getOrDefault(edges[i][1], 0) + 1);
      nodes.add(edges[i][0]);        
      nodes.add(edges[i][0]);
  } 

  // add indegree=0 nodes into the map
  for (Integer node : nodes) {
      if (indegree.get(node) == null) {
          indegree.put(node, 0);
      }
  }

  // start bfs or dfs from 0-indegree nodes
  for (Integer node : indegree.keySet()) {
      if (indegree.get(node) == 0) {
           bfs(node) / dfs(node)
      }
  }
  ```

## Common Topics
[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)

- **Dedirected graph**
   - *Path*
      - [Bus Routes](../../problems/graph/Bus_Routes.md)
      - [All Paths from Source to Target](../../problems/graph/All_Paths_From_Source_To_Target.md)
      - [Shortest Time to Office](../../problems/graph/Shortest_Time_To_Office.md)
   - *Topological sorting order* (`edge[a,b]` mean `a` must happen before `b`)
      - [Course Schedule II](../../problems/graph/Course_Schedule_II.md)
      - [Find All Possible Recipes from Given Supplies](../../problems/graph/Find_All_Possible_Recipes_From_Given_Supplies.md)
      - [Get Lexicographically Increasing Order from Words](../../problems/string/Get_Lexicographically_Increasing_Order_From_Words.md)
   - *Broadcast* (all node get the signal)
      - [Network Delay Time](../../problems/graph/Network_Delay_Time.md)
- **Undirected graph**
   - *Cycle detection*
      - [Detect Cycle in Undirected Graph](../../problems/graph/Detect_Cycle_In_Undirected_Graph.md)
   - *Number of groups*
      - [Get Number of Groups in Undirected Graph](../../problems/graph/Get_Number_Of_Groups_In_Undirected_Graph.md)
   - *Bipartite*
      - [Is Graph Bipartite](../../problems/graph/Is_Graph_Bipartite.md)
- **Other**
   - [Shared Interest](../../problems/graph/Shared_Interest.md)

[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)
