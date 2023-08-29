# Graph

## Types

## Common algorithms

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
     
