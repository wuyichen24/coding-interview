# Sliding Window

## Concept
- Define a window within linear data structure and then move the window from one end to another.

  ![2019-10-14-sliding-window](https://github.com/wuyichen24/coding-interview/assets/8989447/c7dfdf14-da0d-4b45-980d-dfa4097c37a7)

## Problems can use this pattern
- Linear data structure's substring and subarray problems.

## Benefit
- Reduce the time complexity comparing to brute force solution.

## Template
- **Key idea**
   - Use 2 pointers (`left` and `right`) to define a sliding window `[left, right)`.
   - Repeatedly increase the sliding window by increasing the pointer `right` until it satisfies the criteria.
   - Repeatedly shrink the sliding window by decreasing the pointer `left` until it cannot satify the criteria anymore.
- **Code**
  ```java
  void slidingWindow(String s) {
      // store the indexes of each character in the window
      HashMap<Character, Integer> window = new HashMap<>();

      int left = 0, right = 0;
      while (right < s.length()) {
          // c is the new character needs to be added into the window
          char c = s.charAt(right);
          window.put(c, window.getOrDefault(c, 0) + 1);
          // increase the window
          right++;
          // do something for the window
          ...

          /*** debug location ***/
          System.out.printf("window: [%d, %d)\n", left, right);
          /********************/

          // decide the window needs to be shrinked
          while (left < right && window needs shrink) {
              // d is the character needs to be removed
              char d = s.charAt(left);
              window.put(d, window.get(d) - 1);
              // shrink the window
              left++;
              // do something for the window
              ...
          }
      }
  }
  ```
## Time complexity
- O(*log*n)

## Problems
- Use the template
   - [Shortest Substring Has Every Character From Another String](../problems/string/Shortest_Substring_Has_Every_Character_From_Another_String.md)
   - [Does First String Has Substring Which Is Permutation Of Second String](../problems/string/Does_First_String_Has_Substring_Which_Is_Permutation_Of_Second_String.md)
   - [Find All Anagrams in a String](../problems/string/Find_All_Anagrams_In_String.md)
   - [Longest Substring Without Repeating Characters](../problems/string/Longest_Substring_Without_Repeating_Characters.md)
- [Longest Substring of Repeating Character by Replacement](../problems/string/Longest_Substring_Of_Repeating_Character_By_Replacement.md)
- [Multi Dimensional Selection](../problems/other/Multi_Dimensional_Selection.md)
