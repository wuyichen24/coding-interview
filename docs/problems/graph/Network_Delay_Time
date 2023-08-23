# Network Delay Time

743

## Solutions
- Solution 1: Dijkstra
```java
class Solution {
    record Node(int i, int t) {}
    public int networkDelayTime(int[][] times, int n, int k) {
        // create graph
        List<Node>[] g = new List[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (var t : times) g[t[0]-1].add(new Node(t[1]-1, t[2]));

        int[] time = new int[n];
        Queue<Integer> q = new PriorityQueue<>((u, v) -> time[u]-time[v]);
        Arrays.fill(time, Integer.MAX_VALUE);
        time[--k] = 0;
        q.offer(k);

        while (!q.isEmpty()) {
            var cur = q.poll();
            for (var next : g[cur]) {
                int t2 = time[cur] + next.t;
                if (t2 >= time[next.i]) continue;
                time[next.i] = t2;
                q.offer(next.i);
            }
        }

        int res = time[0];
        for (var t : time) if (t == Integer.MAX_VALUE) return -1; else if (t > res) res = t;
        return res;
    }
}
```

```java
/*
Step 1: Create a Map of start and end nodes with weight
        1 -> {2,1},{3,2}
        2 -> {4,4},{5,5}
        3 -> {5,3}
        4 ->
        5 ->

Step 2: create a result array where we will keep track the minimum distance to rech end of the node from start node

Step 3: Create a Queue and add starting position with it's weight and add it's reachable distance with increament of own't weight plus a weight require to reach at the end node from start node.
        We keep adding and removing pairs from queue and updating result array as well.

Step 4: find the maximum value from result array:

*/

class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        
        //Step 1
        Map<Integer, Map<Integer, Integer>> map = new HashMap<>();
        
        for(int[] time : times) {
            int start = time[0];
            int end = time[1];
            int weight = time[2];
            
            map.putIfAbsent(start, new HashMap<>());
            map.get(start).put(end, weight);
        }
        
         // Step 2
        int[] dis = new int[n+1];
        Arrays.fill(dis, Integer.MAX_VALUE);
        dis[k] = 0;
        
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{k,0});
        
        //Step 3:
        while(!queue.isEmpty()) {
            int[] cur = queue.poll();
            int curNode = cur[0];
            int curWeight = cur[1];
            
            for(int next : map.getOrDefault(curNode, new HashMap<>()).keySet()) {
                int nextweight = map.get(curNode).get(next);
                
                if(curWeight + nextweight < dis[next]) {
                    dis[next] = curWeight + nextweight;
                    queue.add(new int[]{next, curWeight + nextweight});
                }
            }
        }
        
        //Step 4:
        int res = 0;
        for(int i=1; i<=n; i++) {
            if(dis[i] > res) {
                res = Math.max(res, dis[i]);
            } 
        }
        
        return res == Integer.MAX_VALUE ? -1 : res;
    }
}
```


- Solution 2: Bellman Ford
```java
class Solution {
    private final static int MAX = 1_000_000_000;
    public int networkDelayTime(int[][] times, int n, int k) {
        int[] time = new int[n+1];
        Arrays.fill(time, MAX);
        time[k] = time[0] = 0; // time[0] is garbage

        for (int i = 1; i < n; i++) { // for n nodes, we iterate max n-1 times
            boolean canRelax = false;
            for (var e : times) if (time[e[0]] + e[2] < time[e[1]]) {
                time[e[1]] = time[e[0]] + e[2];
                canRelax = true;
            }
            if (!canRelax) break;
        }

        int res = time[1];
        for (var t : time) if (t == MAX) return -1; else if (t > res) res = t;
        return res;
    }
}
```

- Solution 3: SPFA
```java
class Solution {
    record Node (int i, int t) {} 
    public int networkDelayTime(int[][] times, int n, int k) {
        // create graph
        List<Node>[] g = new List[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (var t : times) g[t[0]-1].add(new Node(t[1]-1, t[2]));

        int[] time = new int[n];
        Arrays.fill(time, Integer.MAX_VALUE);
        time[--k] = 0;
        boolean[] inQ = new boolean[n];
        Queue<Integer> q = new ArrayDeque<>();
        q.offer(k);

        while (!q.isEmpty()) {
            int cur = q.poll();
            inQ[cur] = false;
            for (var next : g[cur]) {
                if (time[cur] + next.t < time[next.i]) {
                    time[next.i] = time[cur] + next.t;
                    if (!inQ[next.i]) {
                        q.offer(next.i);
                        inQ[next.i] = true;
                    }
                }
            }
        }

        int res = time[0];
        for (var t : time) if (t == Integer.MAX_VALUE) return -1; else if (t > res) res = t;
        return res;
    }
}
```
- Solution 4: Floyd-Warshall
```java
class Solution {
    private final static int MAX = 1_000_000_000; // for convenience
    public int networkDelayTime(int[][] times, int n, int k) {
        int[][] time = new int[n][n]; // we dont use 0
        for (var t : time) Arrays.fill(t, MAX);
        for (int i = 0; i < n; i++) time[i][i] = 0;
        for (var t : times) time[t[0]-1][t[1]-1] = t[2]; // fill in the init matrix

         // m as middle, intermediate
        for (int m = 0; m < n; m++) for (int i = 0; i < n; i++) for (int j = 0; j < n; j++)
            if (time[i][m] + time[m][j] < time[i][j]) time[i][j] = time[i][m] + time[m][j];

        int res = time[--k][0];
        for (var t : time[k]) if (t == MAX) return -1; else if (t > res) res = t;
        return res;
    }
}
```
