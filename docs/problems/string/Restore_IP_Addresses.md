# Restore IP Addresses

## Alias
- Leetcode (93): [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)

## Problem
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
- For example, `"0.1.2.201"` and `"192.168.1.1"` are valid IP addresses, but `"0.011.255.245"`, `"192.168.1.312"` and `"192.168@1.1"` are invalid IP addresses.

Given a string `s` containing only digits, **return all possible valid IP addresses that can be formed by inserting dots into `s`**. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

## Examples
- Example 1
   - Input
     ```
     "25525511135"
     ```
   - Output
     ```
     ["255.255.11.135","255.255.111.35"]
     ```
- Example 2
   - Input
     ```
     "0000"
     ```
   - Output
     ```
     ["0.0.0.0"]
     ```
- Example 3
   - Input
     ```
     "101023"
     ```
   - Output
     ```
     ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
     ```

## Solutions
- **Solution 1: Backtracking**
   - Idea
      - Pick all possible substrings and consider it as one of 4 integers. Check the integer satisfy the rule of ip address.
      - Clarify the key point:
         - *Candicate*: Our potential candidates are all substrings that could be generated from the given string.
         - *Constraint*: A substring must satisfy the rules of IP address
            - Length: Must be 1 or 2 or 3.
            - Value:
               - If length = 2, first digit cannot be 0.
               - If length = 3, value should be <= 255.
         - *Goal*: we have reached the end of the string and the size of integers is 4.

  ```java
  class Solution {
      List<String> res = new LinkedList<>();
      LinkedList<String> track = new LinkedList<>();

      public List<String> restoreIpAddresses(String s) {
          backtrack(s, 0);
          return res;
      }

      void backtrack(String s, int start) {
          if (start == s.length() && track.size() == 4) { // base case (goal)
              res.add(String.join(".", track));           // save the path to the final result list
          }

          for (int i = start; i < s.length(); i++) {
              if (!isValid(s, start, i)) {                // s[start..i] is not a valid IP integer               
                continue;                          
              }
              if (track.size() >= 4) {                    // already have 4 IP integers
                  break;
              }

              track.addLast(s.substring(start, i + 1));   // choose s[start..i] as a IP integer
              backtrack(s, i + 1);
              track.removeLast();                         // undo the choice                       
          }
      }

      boolean isValid(String s, int start, int end) {
          int length = end - start + 1;

          if (length == 0 || length > 3) {                // if length is not 1 or 2 or 3, invalid
              return false;
          }

          if (length == 1) {                              // if length is 1, always valid
              return true;
          }

          if (s.charAt(start) == '0') {                   // if length is 2 or 3 and first char is 0, invalid
              return false;
          }

          if (length <= 2) {
              return true;
          }

          if (Integer.parseInt(s.substring(start, start + length)) > 255) { // if length is 3 and value is > 255, invalid
              return false;
          } else {
              return true;
          }
      }
  }
  ```
