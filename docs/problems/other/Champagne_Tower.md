# Champagne Tower

## Alias
- Leetcode (799): [Champagne Tower](https://leetcode.com/problems/champagne-tower/)

## Problem
We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup of champagne.

Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)

![tower](https://github.com/wuyichen24/coding-interview/assets/8989447/52bcba5e-e437-4658-b164-54d4ab1a75fe)

Now after pouring some non-negative integer cups of champagne, **return how full the `jth` glass in the `ith` row is** (both `i` and `j` are 0-indexed.)

## Solutions
- Solution 1
   - Idea
      - The Champagne Tower is a Pascal's Triangle (PT)
      - Each row in a PT has 1 more element (glass in this case) than the previous row, so the number of elements in row are 1, 2, 3, ..., n
      - First and last element of a PT are equal. Analogously, the first and last glasses in each row will have the same units of champagne
      - To solve this problem, imagine that all the champagne (say n) has been poured into the top most glass all at once, s.t. it'll have n units at the beginning. Then it starts to flow down, getting divided equally into its bottom-left and bottom-right glasses.
      - Except the terminal glasses, which will have 1 glass, all the other glasses will have 2 glasses pouring into them
      - Each glass will take up to 1 unit of champagne and pour the rest to its 2 child glasses, so subtract 1 for self and give the rest away equally to the children
      - So if we process 1 row at a time, up to queryRow times and maintain the amount of champaign units in an array, then array[queryGlass] will be the required result

```java
public double champagneTower(int poured, int queryRow, int queryGlass) {
	if (poured == 0)
		return 0;
	
	var prevRow = new ArrayList<>(List.of((double) poured));

	while (queryRow-- > 0) {
		var champagneInEnds = Math.max(0, (prevRow.get(0) - 1) / 2);  // min champagne can be 0
		var currentRow = new ArrayList<>(List.of(champagneInEnds)); // list with first glass

		for (var i = 1; i < prevRow.size(); i++)
			currentRow.add(Math.max(0, (prevRow.get(i - 1) - 1) / 2) + // flow from top-left glass
						   Math.max(0, (prevRow.get(i) - 1) / 2));     // flow from top-right glass

		currentRow.add(champagneInEnds); // last glass
		prevRow = currentRow;
	}
	
	return Math.min(1, prevRow.get(queryGlass)); // max champagne can be 1
}
```
