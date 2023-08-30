# Champagne Tower

## Alias
- Leetcode (799): [Champagne Tower](https://leetcode.com/problems/champagne-tower/)

## Problem
We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup of champagne.

Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)

![tower](https://github.com/wuyichen24/coding-interview/assets/8989447/921d0ca2-531d-42a7-9aa4-6b716f35447e)

Now after pouring some non-negative integer cups of champagne, **return how full the `jth` glass in the `ith` row is** (both `i` and `j` are 0-indexed.)

## Solutions
- Solution 1
   - Pattern
      - The Champagne Tower is a [Pascal's Triangle](https://mathworld.wolfram.com/PascalsTriangle.html) (PT)
      - Each row has 1 more glass than the previous row.
      - Each glass will take up to 1 unit of champagne and pour the rest to its 2 child glasses.
      - If there are `n` units of champagne pouring into a glass, each child glass will have `(n-1)/2` units of champagne.
      - For the child glass
          - If a child glass is a terminal glass (the first and the last), only 1 parent glass will pour into it.
          - If a child glass is not a termimal glass, 2 parents glassess will pour into it.
   - Steps
      - Create a list to store the volume of each glass the previous row (previous row list).
      - Create a list to store the voiume of each glass the current row (current row list).
      - Move those adjacent lists (like 2 pointers) from top to the target row:
         - Calculate the volume will pour into each terminal glass and add the volume of the first glass into the current row list.
            - Use the pattern: `current = (prev - 1) / 2`
         - Calculate the volume of each middle glasse and add each volume into the current row list.
            - Use the pattern: `current = (prev_left_parent - 1) / 2  +  (prev_right_parent - 1) / 2`
         - Add the volume of the last glass into the current row list.
         - Update the prevous row list as the current row list.

  ```java
  public double champagneTower(int poured, int query_row, int query_glass) {
      if (poured == 0)
          return 0;

      List<Double> prevRow = new ArrayList<>();                             // previous row list to store the volume of each glass in previous row
      prevRow.add((double) poured);

      while (query_row-- > 0) {
          double champagneInEnds = Math.max(0, (prevRow.get(0) - 1) / 2);   // calculate the volume will pour into each terminal glass
          List<Double> currentRow = new ArrayList<>();                      // current row list to store the volume of each glass in current row
          currentRow.add(champagneInEnds);                                  // add the volume of the first glass to the current row list

          for (int i = 1; i < prevRow.size(); i++) {                        // calculate the volume of each glass in the middle                      
              currentRow.add(Math.max(0, (prevRow.get(i - 1) - 1) / 2) +    // add them to the current row list
                        Math.max(0, (prevRow.get(i) - 1) / 2));
          }
          currentRow.add(champagneInEnds);                                  // add the volume of the last glass
          prevRow = currentRow;                                             // update the previous row list as current row list
      }

      return Math.min(1, prevRow.get(query_glass));
  }
  ```
