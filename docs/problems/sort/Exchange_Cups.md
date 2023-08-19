# Exchange Cups

## Problem
The store has a lot of cups, numbered 1-N on the shelf.

For example, there are 5 cups:

2 1 3 5 4

Ask to pick up 2 cups at a time and swap their positions.

After several times, the serial number of the cups is made:

1 2 3 4 5

For such a simple case, obviously, at least 2 swaps are required to reset.

The input format is two lines:

Line 1: A positive integer N (N < 10000) representing the number of bottles
Second line: N positive integers, separated by spaces, indicating the current arrangement of the bottles.

The output data is a positive integer in a row, indicating at least how many times to swap to complete the sorting.

### Function Description
Complete the function `exchange_cups` in the editor below.
`exchange_cups` has the following parameter(s):

`labels[label[0],...label[N-1]]`: an array of integers

### Constraints
N(N < 10000)
