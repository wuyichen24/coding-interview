# Circular Printer

## Problem
A company has invented a new type of printing technology - a circular printer that looks like this:

<img width="287" alt="Screenshot 2023-08-21 at 5 49 19 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/70e25de5-78e7-4b7f-a719-68ee44a19219">

It is a circular printer wheel whith the letter A through Z in sequence. It wraps so A and Z are adjacent. The printer has a pointer that is initially at 'A'. Moving from any character to any adjacent character takes 1 second. It can move in either direction. Given a string of letter, what is the minimum time needed to print the string? (Note: Assume that printing does not take any time. Only consider the time it takes for the pointer to move.)

**Function Description**
Complete the funciton *getTime* in the editor below

*getTime* has the following parameter:

string *s*: the string of characters that need to be printed

**Return**

int: the minimum number of seconds needed to print*s*

**Contranints**
- 1 <= length of *s* <= 10<sup>5</sup>

## Example
- Example 1
   - Input
     ```
     s = "BZA"
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - First, move the pointer from 'A' to 'B' (1 second), then from 'B' to 'Z' (2 seconds), and finally from 'Z' to 'A' (1 second). So the minimum time needed to print "BZA" is 4 seconds.
    
        <img width="269" alt="Screenshot 2023-08-21 at 9 15 36 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/4ff4df48-4dd1-43ac-b432-0264dd6390f3">

- Example 2
   - Input
     ```
     s = "AZGB"
     ```
   - Output
     ```
     13
     ```
   - Explanation
      - Initially, the pointer is at 'A', so there is no need to move it for the first character. First, move the pointer from 'A' to 'Z' (1 second), then from 'Z' to 'G' (7 seconds), and finally from 'G' to 'B' (5 seconds). Therefore, the total timeis 1 + 7 + 5 = 13.

        <img width="253" alt="Screenshot 2023-08-21 at 9 32 47 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/f0490948-b3ea-43c2-9853-866d41730262">

        
- Example 3
   - Input
     ```
     s = "ZNMD"
     ```
   - Output
     ```
     23
     ```
   - Explanation
      - First, move the pointer from 'A' to 'Z' (1 second), then from 'Z' to 'N' (12 seconds), the from 'N' to 'M' (1 second), and finally from 'M' to 'D' (9 seconds). The total time is 1 + 12 + 1 + 9 = 23.

        <img width="264" alt="Screenshot 2023-08-21 at 9 37 18 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/b2d96d60-10d3-4c5d-b75a-d2d1c9d37cbc">

## Solutions
- Solution 1
  **Java**
  ```java
  ```
  

