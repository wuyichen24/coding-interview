# Longest Substring

## Problem
Amazon allows customers to add reviews for the products they bought from their store. The reivew must follow Amazon's community guidelines in order to be published.

Suppose that Amazon has marked *n* strings that are prohibited in reviews. They assign a score to each review that denotes how well it follows the guidelines. The score of a review is defined as the longest contiguous substring of the review which does not contain any string among the list of *n* prohibited strings. A string contains a prohibited word if has a contigous substring that matches a word from the prohibited list, ignoring the case. Given a review and a list of prohibited strings, calculate the review score.

### Example
review = "GoodProductButScrapAfterWash"
prohibitedWords = ["crap", "odpro"]

Some of the substrings that do not contain a prohibited words are
- ProductBut
- rappAfterWash
- dProductButScu
- Wash

The longest substring is "dProductButScra", return the length, 15.

## Solutions
- Solution 1: Sliding Window

  **Python**
  ```python
  def longestWForbidden(forbidden: List[str], s: str) ->int:
      maxSubs, i, j = 0, 0, 0
      while i < len(s) and j < len(s):
          if any(word in s[i:j] for word in forbidden):
              i += 1
          else:
              maxSubs = max(maxSubs, j - i)
              j += 1

      return maxSubs
  ```

  **Java (ChatGPT converted, tested)**
  ```java
  public class LongestSubstringWithoutProhibitedWords {
      public static void main(String[] args) {
          String s = "GoodProductButScrapAfterWash";
          List<String> words = Arrays.asList("crap", "odpro");
          System.out.println(longestWForbidden(words, s));
      }

      public static int longestWForbidden(List<String> forbidden, String s1) {
          int maxSubs = 0;
          int i = 0;
          int j = 0;
          String s = s1.toLowerCase(Locale.ROOT);

          while (i < s.length() && j < s.length()) {
              boolean foundForbidden = false;
              for (String word : forbidden) {
                  if (s.substring(i, j).contains(word)) {
                      foundForbidden = true;
                      break;
                  }
              }

              if (foundForbidden) {
                  i++;
              } else {
                  maxSubs = Math.max(maxSubs, j - i);
                  j++;
              }
          }

          return maxSubs;
      }
  }
  ```

## References
- https://leetcode.com/discuss/interview-experience/803109/amazon-phone-interview-sde2-aug-2020
- https://leetcode.com/discuss/interview-question/3807889/Amazon-OA-%2B-Phone-Screen

![133237r3iib4w53bzr4kzp](https://github.com/wuyichen24/coding-interview/assets/8989447/a0476bea-33b5-4ccb-a9de-e8176005e0c1)
