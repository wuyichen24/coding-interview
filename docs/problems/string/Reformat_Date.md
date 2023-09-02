# Reformat Date

## Alias
- Leetcode (1507): [Reformat Date](https://leetcode.com/problems/reformat-date/)

## Problem
Given a date string in the form `Day Month Year`, where:
- `Day` is in the set `{"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}`.
- `Month` is in the set `{"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}`.
- `Year` is in the range `[1900, 2100]`.

Convert the date string to the format `YYYY-MM-DD`, where:
- `YYYY` denotes the 4 digit year.
- `MM` denotes the 2 digit month.
- `DD` denotes the 2 digit day.

## Examples
- Example 1
   - Input
     ```
     "20th Oct 2052"
     ```
   - Output
     ```
     "2052-10-20"
     ```
- Example 2
   - Input
     ```
     "6th Jun 1933"
     ```
   - Output
     ```
     "1933-06-06"
     ```
- Example 3
   - Input
     ```
     "26th May 1960"
     ```
   - Output
     ```
     "1960-05-26"
     ```

## Solutions
- Solution 1
  ```java
  class Solution {
      public String reformatDate(String date) {
          Map<String,String> m = new HashMap<>();
          m.put("Jan","01"); m.put("Feb","02"); m.put("Mar","03"); m.put("Apr","04");
          m.put("May","05"); m.put("Jun","06"); m.put("Jul","07"); m.put("Aug","08");
          m.put("Sep","09"); m.put("Oct","10"); m.put("Nov","11"); m.put("Dec","12");

          StringBuilder sb = new StringBuilder();
          if(date.length()==13){
              return sb.append(date.substring(9))
              .append("-")
              .append(m.get(date.substring(5,8)))
              .append("-").append(date.substring(0,2))
              .toString();
          }
          return sb.append(date.substring(8))
          .append("-")
          .append(m.get(date.substring(4,7)))
          .append("-0")
          .append(date.substring(0,1))
          .toString();
      }
  }
  ```
