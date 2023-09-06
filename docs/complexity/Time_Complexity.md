# Time Complexity

- [Big O Notation](#big-o-notation)
- [Order of time complexity](#order-of-time-complexity)
- [General rules](#general-rules)
- [Master theorem](#master-theorem)
- [Time complexity of Java built-in functions](#time-complexity-of-java-built-in-functions)
- [References](#references)

## Big O Notation
- Concept: The upper bound of the algorithm
- Notation: O

## Order of time complexity

| Complexity | Name | Example |
|----|----|----|
| O(1) | Constant time | <li>Single statement<li>Hashmap lookup |
| O(*log*n) | Logarithmic time | <li>Binary search or its variants<li>Balanced binary search tree lookup |
| O(n) | Linear time | <li>1-level loop<li>Tree/Graph traversal<li>Linear data structures (array, linked list) traversal<li>Stack/Queue<li>Prefix sum array |
| O(n*log*n) | Linearithmic time | <li>The default sorting function in all mainstream languages<li>Quick sort<li>Merge sort<li>Heap sort<li>Divide and conquer with a linear time merge operation<br>(Divide is normally O(*log*n), and if merge is O(n) then the overall runtime is O(n*log*n)). |
| O(n<sup>2</sup>) | Quadratic time | <li>2-level nested loop<li>Bubble sort<li>Insertion sort<li>Selection sort<li>Some brute force solutions |
| O(n<sup>3</sup>) | Cubic time | <li>Some brute force solutions | 
| O(2<sup>n</sup>) | Exponential time | <li>Some backtracking solution (subsets)<li>Recursion |
| O(n!)| Factorial time | <li>Some backtracking solution (permutations) |
  
## General rules

| Case | Time Complexity |
|----|----|
| Single statement | O(1) |
| 1-level loop | O(n) |
| 2-level nested loop | O(n<sup>2</sup>) |
| k-level nested loop | O(n<sup>k</sup>) |

### Example
- Code
  ```
  for(i = 0; i < n; i++) {
      for(j = 0; j < i; j++) {
          x = x + 1;
      }
  }
  ```
- Time complexity: O(n<sup>2</sup>)
  
## Master theorem
- Goal: Analyze the time complexity of a recursive function.
- Formula: T(n) = aT(n/b) + n<sup>c</sup>
- Notation:
   - a: The number of subproblems.
   - n/b: The scale of each subproblems.
   - n<sup>c</sup>: The time complexity outside the recursive function.
- Rules
   - Case 1: If a > b<sup>c</sup>, so time complexity is n<sup><i>log</i><sub>b</sub>a</sup>.
   - Case 2: If a = b<sup>c</sup>, so time complexity is n<sup>c</sup><i>log</i>n.
   - Case 3: If a < b<sup>c</sup>, so time complexity is n<sup>c</sup>.
- Examples:
   - Example 1:
      - Code
        ```
        func(n) {
            func(n/2);
            func(n/2);
        }
      - Formula: T(n) = 2T(n/2) + 1
      - Parameters:
         - a = 2
         - b = 2
         - c = 0
      - Comparision: 2 > 2<sup>0</sup>
      - Time complexity: n<sup><i>log</i><sub>b</sub>a</sup> = n<sup><i>log</i><sub>2</sub>2</sup> = n 
   - Example 2:
      - Code
        ```
        func(n) {
            for (i = 0; i < n; i++) {
                stmt;
            }
        
            func(n/5);
            func(n/5);
            func(n/5);
        }
      - Formula: T(n) =3T(n/5) + n
      - Parameters:
         - a = 3
         - b = 5
         - c = 1
      - Comparision: 3 < 5<sup>1</sup>
      - Time complexity: n<sup>c</sup> = n<sup>1</sup> = n
   - Example 3:
      - Code
        ```
        func(n) {
            func(n-1);
            func(n-2);
        }
      - Time complexity: 2<sup>n</sup>
      - Comment: This case cannot be applied to master theorem.

## Time complexity of Java built-in functions
- `Arrays.sort()`: *O(nlogn)*
- `Collections.sort`: *O(nlogn)*
    
## References
- https://yourbasic.org/algorithms/time-complexity-recursive-functions/
