# Get Lexicographically Increasing Order from Words

## Alias
- Leetcode (269): [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)

## Problem
- Given a list of words which are sorted lexicographically by the rules of this new language.
- Get the lexicographically increasing order from the words for the new language.

## Solutions
- Solution 1: Breadth-first search
   - Step 1: Find all relationships fragments from 2 adjacent words
      - The relationship is first non-match characters between 2 adjacent words.
      - Save the relationships into into adjacent list and indegree count list.
         - Adjacent list is a map which key is each unique characters and value is a list of characters has the indegree relationship with the key.
         - Indegree count list is a map which key is each unique character and value is the count of indegree relationship.
   - Step 2: Use breadth-first search to combine relationships fragments
      - Breadth-first search will start at the characters which has no indegree relationship.
      - The traverse order of breadth-first search is the lexicographically increasing order. 

  ```java
  public String alienOrder(String[] words) {
      // Step 0: Create adjacency list and indegree count list
      Map<Character, List<Character>> adjList = new HashMap<>();
      Map<Character, Integer> inCounts = new HashMap<>();
      for (String word : words) {
          for (char c : word.toCharArray()) {
              inCounts.put(c, 0);
              adjList.put(c, new ArrayList<>());
          }
      }
    
      // Step 1: Find all relationships
      for (int i = 0; i < words.length - 1; i++) {
          String word1 = words[i];
          String word2 = words[i + 1];
          // Check that word2 is not a prefix of word1.
          if (word1.length() > word2.length() && word1.startsWith(word2)) {
              return "";
          }
          // Find the first non-match characters and insert the corresponding relationship into adjacency list
          for (int j = 0; j < Math.min(word1.length(), word2.length()); j++) {
              if (word1.charAt(j) != word2.charAt(j)) {
                  adjList.get(word1.charAt(j)).add(word2.charAt(j));
                  inCounts.put(word2.charAt(j), inCounts.get(word2.charAt(j)) + 1);
                  break;
              }
          }
      }
    
      // Step 2: Breadth-first search.
      StringBuilder sb = new StringBuilder();
      Queue<Character> queue = new LinkedList<>();
      for (Character c : inCounts.keySet()) {              // Add the characters which has no indegree link into the queue
          if (inCounts.get(c).equals(0)) {                 // These characters will be our starting
              queue.add(c);
          }
      }
      while (!queue.isEmpty()) {
          Character c = queue.remove();                    // Get one character from queue
          sb.append(c);                                    // Add the current character into the result
          for (Character next : adjList.get(c)) {          // Get one next character from the current character
              inCounts.put(next, inCounts.get(next) - 1);  //     Decrement the indegree count by 1 for the next character
              if (inCounts.get(next).equals(0)) {          //     If there is no indegree link to the next character
                  queue.add(next);                         //     Add the next character into the queue
              }
          }
      }
    
      if (sb.length() < inCounts.size()) {
          return "";
      }
      return sb.toString();
  }
  ```

  ![alien](https://user-images.githubusercontent.com/8989447/117523517-06cc8300-af76-11eb-9ff6-2e65d81581e0.png)
