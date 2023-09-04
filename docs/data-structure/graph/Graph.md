# Graph

## Types

## Common algorithms
- BFS
- DFS
- Dijkstra's algorithm
- Kahn's algorithm

## Best practice
- **Build the graph before executing any algorithm**
   - Reason
      - Before we running any algorithm, it would be better to build the graph by map or any key-value pairs structures.
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

## Common Topics
- Dedirected graph
   - Path
      - [Bus Routes](../../problems/graph/Bus_Routes.md)
      - [Shortest Time to Office](../../problems/graph/Shortest_Time_To_Office.md)
   - Topological sorting order (`edge[a,b]` mean `a` must happen before `b`)
      - [Course Schedule II](../../problems/graph/Course_Schedule_II.md)
   - Broadcast (all node get the signal)
      - [Network Delay Time](../../problems/graph/Network_Delay_Time.md)
- Undirected graph
   - Cycle detection
      - [Detect Cycle in Undirected Graph](../../problems/graph/Detect_Cycle_In_Undirected_Graph.md)
   - Number of groups
      - [Get Number of Groups in Undirected Graph](../../problems/graph/Get_Number_Of_Groups_In_Undirected_Graph.md)
   - Bipartite
      - [Is Graph Bipartite](../../problems/graph/Is_Graph_Bipartite.md)
- Other
   - [Shared Interest](problems/graph/Shared_Interest.md)
