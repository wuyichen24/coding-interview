# Longest Palindromic Substring

## Alias
- Leetcode (5): [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem
Given a string `s`, return the longest palindromic substring in `s`.

## Examples
- Example 1
   - Input
     ```
     "babad"
     ```
   - Output
     ```
     "bab"
     ```
   - Explanation
      - `"aba"` is also a valid answer.
- Example 2
   - Input
     ```
     "cbbd"
     ```
   - Output
     ```
     "bb"
     ```

## Solutions
- Solution 1
   - Idea
      - Check each char from left to right and extend palindromic substring at each char
      - Consider both odd length substring and even length substring

```java
class Solution {
    private int leftEnd;   // record the index of the left end of substring
    private int maxLen;    // record the max length of substring

    public String longestPalindrome(String s) {
        int len = s.length();
	      if (len < 2)
		        return s;
	
        for (int i = 0; i < len-1; i++) {
     	      extendPalindrome(s, i, i);   // assume odd length, try to extend Palindrome as possible
     	      extendPalindrome(s, i, i+1); // assume even length.
        }
        return s.substring(leftEnd, leftEnd + maxLen);
    }

    private void extendPalindrome(String s, int j, int k) {
        // if 2 ends of substring can extend, continue extending
	      while (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {
		        j--;
		        k++;
	      }

        // if the current substring is longer than the max length, update the max length and index of left end
	      if (maxLen < k - j - 1) {
		        leftEnd = j + 1;
            maxLen = k - j - 1;
	      }
    }
}
```
