# Open the Lock

## Alias
- Leetcode (752): [Open the Lock](https://leetcode.com/problems/open-the-lock/)

## Problem
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: `'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'`. The wheels can rotate freely and wrap around: for example we can turn `'9'` to be `'0'`, or `'0'` to be `'9'`. Each move consists of turning one wheel one slot.​

The lock initially starts at `'0000'`, a string representing the state of the 4 wheels.​

You are given a list of `deadends` dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.​

Given a target representing the value of the wheels that will unlock the lock, **return the minimum total number of turns required to open the lock**, or `-1` if it is impossible.​

# Examples
- Example 1
   - Input
     ```
     deadends = ["0201","0101","0102","1212","2002"], target = "0202"
     ```
   - Output
     ```
     6
     ```
   - Explanation
      - A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
      - Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
      - because the wheels of the lock become stuck after the display becomes the dead end "0102".
- Example 2
   - Input
     ```
     deadends = ["8888"], target = "0009"
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - We can turn the last wheel in reverse to move from "0000" -> "0009".
- Example 3
   - Input
     ```
     deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
     ```
   - Output
     ```
     -1
     ```
   - Explanation
      - We cannot reach the target without getting stuck.

## Solution
- **Solution 1: BFS**
   - Idea
      - Use BFS to search
      - After getting the current sequence, try to turn each wheel up and down (getting adjacent nodes)
  ```java
  class Solution {
      public int openLock(String[] deadends, String target) {
          Set<String> deads = new HashSet<>();
          for (String s : deadends) deads.add(s);
    
          Set<String> visited = new HashSet<>();
          Queue<String> queue = new LinkedList<>();

          int step = 0;
          queue.offer("0000");
          visited.add("0000");
    
          while (!queue.isEmpty()) {
              int sz = queue.size();
              for (int i = 0; i < sz; i++) {
                  String cur = queue.poll();
            
                  if (deads.contains(cur))            // check current is deadends or not
                      continue;
                  if (cur.equals(target))             // check current reaches target or not
                      return step;
            
                  for (int j = 0; j < 4; j++) {       // try to turn each wheel up and down
                      String up = plusOne(cur, j);
                      if (!visited.contains(up)) {
                          queue.offer(up);
                          visited.add(up);
                      }
                      String down = minusOne(cur, j);
                      if (!visited.contains(down)) {
                          queue.offer(down);
                          visited.add(down);
                      }
                  }
              }

              step++;
          }

          return -1;
      }

      // turn s[j] one step up
      String plusOne(String s, int j) {
          char[] ch = s.toCharArray();
          if (ch[j] == '9')
              ch[j] = '0';
          else
              ch[j] += 1;
          return new String(ch);
      }
    
      // turn s[j] one step down
      String minusOne(String s, int j) {
          char[] ch = s.toCharArray();
          if (ch[j] == '0')
              ch[j] = '9';
          else
              ch[j] -= 1;
          return new String(ch);
      }
  }
  ```
- **Solution 2: Bidirectional search**
  ```java
  public int openLock(String[] deadends, String target) {
      Set<String> begin = new HashSet<>();
      Set<String> end = new HashSet<>();
      Set<String> deads = new HashSet<>(Arrays.asList(deadends));
      begin.add("0000");
      end.add(target);
      int level = 0;
      while(!begin.isEmpty() && !end.isEmpty()) {
          Set<String> temp = new HashSet<>();
          for(String s : begin) {
              if(end.contains(s)) return level;
              if(deads.contains(s)) continue;
              deads.add(s);
              StringBuilder sb = new StringBuilder(s);
              for(int i = 0; i < 4; i ++) {
                  char c = sb.charAt(i);
                  String s1 = sb.substring(0, i) + (c == '9' ? 0 : c - '0' + 1) + sb.substring(i + 1);
                  String s2 = sb.substring(0, i) + (c == '0' ? 9 : c - '0' - 1) + sb.substring(i + 1);
                  if(!deads.contains(s1))
                      temp.add(s1);
                  if(!deads.contains(s2))
                      temp.add(s2);
              }
          }
          level ++;
          begin = end;
          end = temp;
      }
      return -1;
  }
  ```

## References
- [Bytedance OA Software Engineer for Global Payment System](https://leetcode.com/company/bytedance/discuss/2552030/Bytedance-OA-Software-Engineer-for-Global-Payment-System)
- [Leetcode - 752. Open the Lock](https://leetcode.com/problems/open-the-lock/description/)
- [Youtube - Open the Lock - Leetcode 752 - Python](https://www.youtube.com/watch?v=Pzg3bCDY87w&ab_channel=NeetCode)
