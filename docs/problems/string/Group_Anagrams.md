# Group Anagrams

## Alias
- Leetcode (49): [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## Problem
Given an array of strings `strs`, group *the anagrams* together. You can return the answer in *any order*.

An *Anagram* is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Examples
- Example 1
   - Input
     ```
     ["eat","tea","tan","ate","nat","bat"]
     ```
   - Output
     ```
     [["bat"],["nat","tan"],["ate","eat","tea"]]
     ```

## Solutions
- **Solution 1: Sort string**
   - Idea
      - Two strings are anagrams if and only if their sorted strings are equal.
  ```java
  public List<List<String>> groupAnagrams(String[] strs) {
      if (strs.length == 0) return new ArrayList();
      Map<String, List> ans = new HashMap<String, List>();
      for (String s : strs) {
          char[] ca = s.toCharArray();
          Arrays.sort(ca);
          String key = String.valueOf(ca);
          if (!ans.containsKey(key)) ans.put(key, new ArrayList());
          ans.get(key).add(s);
      }
      return new ArrayList(ans.values());
  }
  ```
- **Solution 2: Group by encoding value**
   - Idea
      - Two strings are anagrams if and only if their encoding values are equal.
      - Encoding logic: The number of occurrences of each letter.
  ```java
  class Solution {
      public List<List<String>> groupAnagrams(String[] strs) {
          HashMap<String, List<String>> codeToGroup = new HashMap<>();
          for (String s : strs) {
               String code = encode(s);
               codeToGroup.putIfAbsent(code, new LinkedList<>());
               codeToGroup.get(code).add(s);
          }

          List<List<String>> res = new LinkedList<>();
          for (List<String> group : codeToGroup.values()) {
              res.add(group);
          }

          return res;
      }

      String encode(String s) {
          char[] count = new char[26];
          for (char c : s.toCharArray()) {
              int delta = c - 'a';
              count[delta]++;
          }
          return new String(count);
      }
  }
  ```
