# Group Shifted Strings

## Alias
- Leetcode (249): [Group Shifted Strings](https://leetcode.com/problems/group-shifted-strings/)

## Problem
- Given an array of strings, group all strings that belong to the same shifting sequence.
- Shifting a string is to shift each letter to its successive letter correspondingly.
   - "abc" can be shifted to be "bcd".
   - "ac" can be shifted to be "bd".
   - "az" can be shifted to be "ba" ("z" shifts 1 position will be "a").

## Examples
- Example 1
   - Strings: `["abc","bcd","acef","xyz","az","ba","a","z"]`.
   - Groups: `[["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]`

## Solutions
- Solution 1
   - For each string, Calculate the relevant distance between each character and its previous character.
  ```java
  public List<List<String>> groupStrings(String[] strings) {
      Map<Long, List<String>> map = new HashMap<>();
      for (String s : strings) {
          long code = encode(s);
          if (!map.containsKey(code)) map.put(code, new ArrayList<>());
          map.get(code).add(s);
      }
      return new ArrayList<>(map.values());
  }
    
  private long encode(String s) {
      long dis  = 1;
      char prev = s.charAt(0);
      for (char ch : s.toCharArray()) {
          dis = dis * 5;                      // Multiply 5 is to amplify the relevant distance proportionally
          dis = dis + (ch - prev + 26) % 26;  // Calculate the relevant distance between the current character and the previous character
          prev = ch;
      }
      return dis;
  }
  ```
