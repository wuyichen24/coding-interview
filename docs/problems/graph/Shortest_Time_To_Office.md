# Shortest Time to Office

## Problem
Mr Gao always take public transportation to office. His home is quite far away from the office, so he needs to transit multiple times across different stations. The time that he spends between each station is different. We can imagine the route will look like an unary direction graph.

![Shortest_Time_to_Office drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/546a40fc-f7a6-4ab9-a5aa-9b632b18e064)

Write an algorithm to help Mr Gao evaluate the shortest time from home to office input:
- Home node: String (e.g. S0)
- Office node: String (e.g. S4)
- Paths: 2D String Array to represent available routes (e.g. [["S0", "S11", "16"], ["S0", "S11", "22"]])

Output
- The shortest time from work to home: Long

## Solutions
- Solution 1: Dijkstra's algorithm
   - Algorithm
      - Initialize a distance array to store the minimum distances from the source node to all other nodes. Initialize the distance to the source node as 0 and distances to other nodes as infinity.
      - Create a priority queue (or min-heap) to store nodes with their corresponding distances.
      - Add the source node to the priority queue.
      - While the priority queue is not empty, do the following:
         - Extract the node with the minimum distance from the priority queue.
         - For each neighbor of the extracted node, calculate the distance through the extracted node to the neighbor. If this distance is shorter than the current distance stored in the distance array, update the distance and add the neighbor to the priority queue.

  ```java
  public class DijkstraAlgorithm {
      static class Node implements Comparable<Node> {
          String vertex;
          int distance;

          Node(String vertex, int distance) {
              this.vertex = vertex;
              this.distance = distance;
          }

          @Override
          public int compareTo(Node other) {
              return Integer.compare(this.distance, other.distance);
          }
      }

      public static int getShortestTime(String homeNode, String officeNode, String[][] paths) {
          Map<String, Map<String, Integer>> graph = new HashMap<>();
          for (String[] path : paths) {
              String source = path[0];
              String destination = path[1];
              int weight = Integer.parseInt(path[2]);

              graph.putIfAbsent(source, new HashMap<>());
              graph.get(source).put(destination, weight);
          }

          Map<String, Integer> distances = new HashMap<>();
          PriorityQueue<Node> priorityQueue = new PriorityQueue<>();

          for (String vertex : graph.keySet()) {
              distances.put(vertex, Integer.MAX_VALUE);
          }
          distances.put(officeNode, Integer.MAX_VALUE);
          distances.put(homeNode, 0);

          priorityQueue.add(new Node(homeNode, 0));

          while (!priorityQueue.isEmpty()) {
              Node current = priorityQueue.poll();
              String currentVertex = current.vertex;
              int currentDistance = current.distance;

              if (currentDistance > distances.get(currentVertex)) {
                  continue;
              }

              if (currentVertex.equals(officeNode)) {
                  return currentDistance;
              }

              for (Map.Entry<String, Integer> neighborEntry : graph.get(currentVertex).entrySet()) {
                  String neighbor = neighborEntry.getKey();
                  int edgeWeight = neighborEntry.getValue();
                  int newDistance = currentDistance + edgeWeight;

                  if (newDistance < distances.get(neighbor) ) {
                      distances.put(neighbor, newDistance);
                      priorityQueue.add(new Node(neighbor, newDistance));
                  }
              }
          }

          return -1; // No valid path found
      }

      public static void main(String[] args) {
          String homeNode = "S0";
          String officeNode = "S4";
          String[][] paths = {
                  {"S0", "S11", "16"},
                  {"S0", "S12", "22"},
                  {"S0", "S13", "18"},
                  {"S11", "S21", "8"},
                  {"S12", "S21", "12"},
                  {"S12", "S22", "13"},
                  {"S13", "S21", "15"},
                  {"S13", "S22", "11"},
                  {"S21", "S31", "7"},
                  {"S21", "S32", "21"},
                  {"S22", "S31", "17"},
                  {"S22", "S32", "13"},
                  {"S22", "S33", "19"},
                  {"S31", "S4", "9"},
                  {"S32", "S4", "18"},
                  {"S33", "S4", "20"}
          };

          int shortestDistance = getShortestTime(homeNode, officeNode, paths);
          System.out.println(shortestDistance);
      }
  }
  ```  
