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

## Solutions
