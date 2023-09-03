# Convert Integer to English Words

## Alias
- Leetcode (273): [Integer to English Words](https://leetcode.com/problems/task-scheduler/)

## Problem
- Convert a non-negative integer num to its English words representation.

## Example
- Example 1
   - Input: 123
   - Output: One Hundred Twenty Three
- Example 2
   - Input: 1234567891
   - Output: One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One

## Solutions
- Solution 1: Divide and conquer
   - Separate the number into billion, million, thousand sub-problems, each sub-problem has 3 digits at most.
   - For each 3-digit number, separate into 1 digit for hundred and 2 digits
   - For each 2-digit number, consider
      - 0 ~ 9
      - 10 ~ 19
      - 20 ~ 99

  ![word](https://user-images.githubusercontent.com/8989447/117063263-cb198b00-ace1-11eb-8217-b512ee5da169.png)

  ```java
  public String numberToWords(int num) {
      if (num == 0) return "Zero";

      int billion  = num / 1000000000;
      int million  = (num - billion * 1000000000) / 1000000;
      int thousand = (num - billion * 1000000000 - million * 1000000) / 1000;
      int rest     = num - billion * 1000000000 - million * 1000000 - thousand * 1000;

      String result = "";
      if (billion != 0)
          result = three(billion) + " Billion";
      if (million != 0) {
          if (! result.isEmpty())
              result += " ";
          result += three(million) + " Million";
      }
      if (thousand != 0) {
          if (! result.isEmpty())
              result += " ";
          result += three(thousand) + " Thousand";
      }
      if (rest != 0) {
          if (! result.isEmpty())
              result += " ";
          result += three(rest);
      }
      return result;
  }
    
  // Handle 3 digits
  public String three(int num) {
      int hundred = num / 100;
      int rest    = num - hundred * 100;
      String res = "";
      if (hundred * rest != 0) {
          res = one(hundred) + " Hundred " + two(rest);
      } else if ((hundred == 0) && (rest != 0)) {
          res = two(rest);
      } else if ((hundred != 0) && (rest == 0)) {
          res = one(hundred) + " Hundred";
      }
      return res;
  }
    
  // Handle 2 digits
  public String two(int num) {
      if (num == 0) {
          return "";
      } else if (num < 10) {                         
          return one(num);
      } else if (num < 20) {
          return twoLessThan20(num);
      } else {
          int tenner = num / 10;
          int rest = num - tenner * 10;
          if (rest != 0) {
              return ten(tenner) + " " + one(rest);
          } else {
              return ten(tenner);
          }
      }
  }
    
  // Handle 1 digit
  public String one(int num) {
      switch(num) {
          case 1: return "One";
          case 2: return "Two";
          case 3: return "Three";
          case 4: return "Four";
          case 5: return "Five";
          case 6: return "Six";
          case 7: return "Seven";
          case 8: return "Eight";
          case 9: return "Nine";
      }
      return "";
  }

  // Handle 2 digits
  public String twoLessThan20(int num) {
      switch(num) {
          case 10: return "Ten";
          case 11: return "Eleven";
          case 12: return "Twelve";
          case 13: return "Thirteen";
          case 14: return "Fourteen";
          case 15: return "Fifteen";
          case 16: return "Sixteen";
          case 17: return "Seventeen";
          case 18: return "Eighteen";
          case 19: return "Nineteen";
      }
      return "";
  }

  // Handle tenner
  public String ten(int num) {
      switch(num) {
          case 2: return "Twenty";
          case 3: return "Thirty";
          case 4: return "Forty";
          case 5: return "Fifty";
          case 6: return "Sixty";
          case 7: return "Seventy";
          case 8: return "Eighty";
          case 9: return "Ninety";
      }
      return "";
  }    
  ```
