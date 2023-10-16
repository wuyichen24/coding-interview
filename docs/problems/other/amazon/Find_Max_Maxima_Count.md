# Find Maximum MaximaCount

## Problem
Amazon has a string of categories of item purchased by a particular customer, each represented as a lowercase English letter. To analyze custom behavior, we define a metric called the MaximaCount of a category. It is the number of indices where the frequency of some category *c* is the maximum amoung all categories present in the prefix of *i*.

More elaboratively, *MaximaCount* of character, *char*, representing a category is defined as the number of indices *i*, such that the frequency of *char* is maximum in the prefix of the string up to the index *i*.

Given the string *categories*, find the maximum *MaximaCount* among all the categories.

### Example
Given *categories = "bccaaacb"*, there are three categories [a, b, c]

| Index -> Character | 1 b | 2 c | 3 c | 4 a | 5 a | 6 a | 7 c | 8 b |
|----|----|----|----|----|----|----|----|----|
| a | 0 | 0 | 0 | 1 | 2 | 3 | 3 | 3 |
| b | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 2 |
| c | 0 | 1 | 2 | 2 | 2 | 2 | 3 | 3 |

For the above table (assuming 1-based indexing):
- MaximaCount of a = 4 at indices 5,6,7,8.
- MaximaCount of b = 2 at indices 1,2.
- MaximaCount of c = 6 at indices 2,3,4,5,7,8.

Thus the maximum *MaximaCount* is 6 for the character c.

### Function Description
Complete the function *findMaximumMaximaCount* in the editor below. The function returns an integer denoting the maximum attainable favourability.

*findMaximumMaximaCount* has the following parameter:
- string categories: the given string

### Return
- int: the maximum MaximaCount

## Examples
- Example 1
   - Input
     ```
     adbcbcbcc
     ```
   - Output
     ```
     6
     ```
- Example 2
   - Input
     ```
     zzzz
     ```
   - Output
     ```
     4
     ```

## Solutions
- Solution 1
   - Idea
      - One map count the frequency of each character, another map count the maxima count of each character
      - When read a new character:
         - Update the frequency map.
         - Find the top frequency characters.
         - Update the maxima count of those top frequency characters.
  ```java
  public class FindMaximumMaximaCount {
      public static void main(String[] args) {
          String categories1 = "bccaaacb";
          System.out.println(findMaximumMaximaCount(categories1));

          String categories2 = "adbcbcbcc";
          System.out.println(findMaximumMaximaCount(categories2));

          String categories3 = "zzzz";
          System.out.println(findMaximumMaximaCount(categories3));
      }

      static int findMaximumMaximaCount(String categories) {
          Map<Character, Integer> counter = new HashMap<>();                                       // count the frequency of each character
          Map<Character, Integer> maximaCount = new HashMap<>();                                   // maximaCount of each character
          int currentMaxCount = 0;
          for (int i = 0; i < categories.length(); i++) {
              char ch = categories.charAt(i);
              counter.put(ch, counter.getOrDefault(ch, 0) + 1);                         // update the frequency
              // try findMaximumMaximaCount + 1
              List<Character> charList1 = getCharacterByCount(counter, currentMaxCount + 1); // find the top frequency (old top + 1) characters
              if (!charList1.isEmpty()) {
                  updateMaximaCountByCharList(maximaCount, charList1);                             // update the maxima count of top frequency characters
                  currentMaxCount = currentMaxCount + 1;
              } else {
                  // try findMaximumMaximaCount
                  List<Character> charList0 = getCharacterByCount(counter, currentMaxCount);       // find the top frequency (old top) characters
                  updateMaximaCountByCharList(maximaCount, charList0);                             // update the maxima count of top frequency characters
              }
          }

          return getMaximumMaximaCount(maximaCount);
      }

      static List<Character> getCharacterByCount(Map<Character, Integer> counter, int count) {
          List<Character> charList = new ArrayList<>();
          for (Character ch : counter.keySet()) {
              if (counter.get(ch) == count) {
                  charList.add(ch);
              }
          }
          return charList;
      }

      static void updateMaximaCountByCharList(Map<Character, Integer> maximaCount, List<Character> charList) {
          for (Character ch : charList) {
              maximaCount.put(ch, maximaCount.getOrDefault(ch, 0) + 1);
          }
      }

      static int getMaximumMaximaCount(Map<Character, Integer> maximaCount) {
          int max = 0;
          for (Character ch : maximaCount.keySet()) {
              if (maximaCount.get(ch) > max) {
                  max = maximaCount.get(ch);
              }
          }
          return max;
      }
  }
  ```

![174439oikccrbrzch0uria](https://github.com/wuyichen24/coding-interview/assets/8989447/f52f6879-091b-4b47-baee-7af06534b0e8)
![174455v5uuvr04rr5dzruu](https://github.com/wuyichen24/coding-interview/assets/8989447/9cdf94b5-07f6-4da3-9599-6ef5d0dc2ea1)
