# Score of Parentheses

## Alias
- Leetcode (856): [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/)

## Problem
Given a balanced parentheses string `s`, return the score of the string.

The score of a balanced parentheses string is based on the following rule:
- "()" has score `1`.
- `AB` has score `A + B`, where `A` and `B` are balanced parentheses strings.
- `(A)` has score `2 * A`, where `A` is a balanced parentheses string.

## Examples
- Example 1
   - Input
     ```
     ()
     ```
   - Output
     ```
     1
     ```
- Example 2
   - Input
     ```
     (())
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - `2 * 1 = 2`
- Example 3
   - Input
     ```
     ()()
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - 1 + 1 = 2
- Example 3
   - Input
     ```
     (()(()))
     ```
   - Output
     ```
     6
     ```
   - Explanation

     ![](https://github.com/wuyichen24/coding-interview/assets/8989447/f24b32fc-6079-4cb1-99a1-cdc4b7148874)

## Solutions
- Solution 1: Stack
   - Idea
      - First create one stack of Integer
      - So, as we are using Integer, what we gonna put in stack is intially 0 when we encounter `(`
      - And we'll calculate the score when we encounter `)`
   - Explanation

     ![12s](https://github.com/wuyichen24/coding-interview/assets/8989447/decc9af4-fdee-43e3-9054-4487107e19c4)

  ```java
  public int scoreOfParentheses(String s) {
      Stack<Integer> stack = new Stack<>();
      int score = 0;
      for(int i = 0; i < s.length(); i++){
          char ch = s.charAt(i);
          if(ch == '(') {                          // when encounter (, put 0 into stack
              stack.push(score);
              score = 0;
          } else {                                 // when encounter ), calculate the score
              score = stack.pop() + Math.max(2 * score, 1);
          }
      }
      return score;
  }
  ```
