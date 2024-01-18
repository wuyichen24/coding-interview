# Merge Strings Alternately

## Alias
- Leetcode (1768): [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

## Problem
You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

## Examples
- Example 1
   - Input
     ```
     word1 = "abc"
     word2 = "pqr"
     ```
   - Output
     ```
     "apbqcr"
     ```
   - Explanation
     ```
     word1:  a   b   c
     word2:    p   q   r
     merged: a p b q c r
     ```
- Example 2
   - Input
     ```
     word1 = "ab"
     word2 = "pqrs"
     ```
   - Output
     ```
     "apbqrs"
     ```
   - Explanation
     ```
     word1:  a   b 
     word2:    p   q   r   s
     merged: a p b q   r   s
     ```
- Example 3
   - Input
     ```
     word1 = "abcd"
     word2 = "pq"
     ```
   - Output
     ```
     "apbqcd"
     ```
   - Explanation
     ```
     word1:  a   b   c   d
     word2:    p   q 
     merged: a p b q c   d
     ```

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - One pointer runs on word1 and another pointer runs on word2.
      - Use a boolean flag to decide which word need to merge next.
      - Consider one word is finished but another word isn't finished.

  ```java
  public String mergeAlternately(String word1, String word2) {
      StringBuilder sb = new StringBuilder();

      int i = 0, j = 0;
      boolean addWord1 = true;
      while(i < word1.length() || j < word2.length()) {
          if (addWord1 && i < word1.length()) {
              sb.append(word1.charAt(i));
              i++;
              addWord1 = false;
          } else if (!addWord1 && j < word2.length()) {
              sb.append(word2.charAt(j));
              j++;
              addWord1 = true;
          } else if (i >= word1.length()) {
              sb.append(word2.charAt(j));
              j++;
          } else if (j >= word2.length()) {
              sb.append(word1.charAt(i));
              i++;
          }
      }

      return sb.toString();
  }
  ```
