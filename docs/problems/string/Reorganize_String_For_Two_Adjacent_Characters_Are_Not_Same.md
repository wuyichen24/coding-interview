# Reorganize String for Two Adjacent Characters Are Not Same

## Alias
- Leetcode (767): [Reorganize String](https://leetcode.com/problems/reorganize-string/)

## Problem
Given a string `s`, rearrange the characters of `s` so that any two adjacent characters are not the same.

Return any possible rearrangement of `s` or return `""` if not possible.

## Examples
- Example 1
   - Input
     ```
     "aab"
     ```
   - Output
     ```
     "aba"
     ```
- Example 2
   - Input
     ```
     "aaab"
     ```
   - Output
     ```
     ""
     ```

## Solutions
- **Solution 1: Frequency counter + priority queue**
   - Idea
      - Use an integer array to count the frequency of each character
      - Use priority queue to select the most frequent character that isn't the one previously placed.
         - If the most frequent character was previously placed, use the 2nd most frequent character.
   - Steps
    
  ```java
  public String reorganizeString(String s) {
      // count the frequency of each character
      int[] charCounts = new int[26];
      for (char c : s.toCharArray()) {
          charCounts[c - 'a']++;
      }

      // create a priority queue and let it ordered by frequency descending order
      var pq = new PriorityQueue<int[]>((a, b) -> Integer.compare(b[1], a[1]));
      for (int i = 0; i < 26; i++) {
          if (charCounts[i] > 0) {
              pq.offer(new int[] {i + 'a', charCounts[i]});
          }
      }
            
      StringBuilder sb = new StringBuilder();
      while (!pq.isEmpty()) {
          var first = pq.poll();                                             // get the char has most frequency
          if (sb.length() == 0 || first[0] != sb.charAt(sb.length() - 1)) {  // if final string is empty and the char is not used in previous position
              sb.append((char) first[0]);                                    // add the char to the final string 
              if (--first[1] > 0) {
                  pq.offer(first);
              }
          } else {
              if (pq.isEmpty()) {
                  return "";
              }
                
              var second = pq.poll();                                        // if the char is used in previous position, get the char has 2nd most frequency
              sb.append((char) second[0]);
              if (--second[1] > 0) {
                  pq.offer(second);
              }
                
              pq.offer(first);
          }
      }
        
      return sb.toString();
  }
  ```
