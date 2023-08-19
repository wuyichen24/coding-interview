# Exchange Cups

## Problem
The store has a lot of cups, numbered 1-N on the shelf.

For example, there are 5 cups:

2 1 3 5 4

Ask to pick up 2 cups at a time and swap their positions.

After several times, the serial number of the cups is made:

1 2 3 4 5

For such a simple case, obviously, at least 2 swaps are required to reset.

**The input format is two lines**:

Line 1: A positive integer N (N < 10000) representing the number of bottles
Second line: N positive integers, separated by spaces, indicating the current arrangement of the bottles.

The output data is a positive integer in a row, indicating at least how many times to swap to complete the sorting.

### Function Description
Complete the function `exchange_cups` in the editor below.
`exchange_cups` has the following parameter(s):

`labels[label[0],...label[N-1]]`: an array of integers

### Constraints
N(N < 10000)

## Understand question
- You can switch any 2 elements at any position. They don't have to be next to each other.
   - Bubble sort cannot be used in this question, because it will only swap 2 elements next to each other.

## Solutions
- Solution 1: 2 pointers
   - Idea
      - Use one pointer (`i`) to traverse each element from left to right.
      - Use another pointer (`j`) to traverse each element on the right side of the pointer `i` to find the minimal element after the pointer `i`.
         - If find a minimal element after after the pointer `i`, switch the value between the minimal element and the element of pointer `i`;

  ```java
  public static int exchangeCups(int[] labels) {
      int swapCounter = 0;

      for (int i = 0; i < labels.length - 1; i++) {
          int min = i;      // the index of the minimal element after i
          for (int j = i; j < labels.length; j++) {
              if (labels[min] > labels[j]) {
                  min = j;
              }
          }

          if (i != min) {   // if i is not the minimal element, swap between i and min
              int tmp = labels[i];
              labels[i] = labels[min];
              labels[min] = tmp;
              swapCounter++;
          }
      }

      return swapCounter;
  }
  ```
