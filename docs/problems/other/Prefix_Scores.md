# Prefix Scores

## Problem
For an array *arr* of *n* integers, in the i<sup>th</sup> operation, the i<sup>th</sup> element of the array is incremented by the current maximum value of the array. The score of the array is defined as the sum of elements of the final array after performing the above operation *n* times.

Given *arr*, report an array of *n* integers, where the i<sup>th</sup> integer represents *the score of the prefix array that consists of the first i* elements of the given array. As the answer can be large, report it modulo 10<sup>9</sup> + 7.

For an array *arr* of *n* integers, the i<sup>th</sup> operation increments its i<sup>th</sup> element by the maximum value in *arr* up to the i<sup>th</sup> index. The *score* of the array is the sum of its elements after performing the operation *n* times.

Given *arr*, report an array of *n* integers, where the i<sup>th</sup> integer represents *the score of the prefix array that consists of the first i* elements of *arr*.As the answers can be large, report them modulo (10<sup>9</sup> + 7).

Note: The prefix of the first *i* elements of the array is defined as an array *[arr[0], arr[1] .... arr [i-1]]* assuming indexing starts from 0.

**Function Description**

Complete the function *getPrefixScores* in the editor below.

*getPrefixScores* has the following parameter:

*int arr[n]: the given array*

**Returns**

*int[n]*: the prefix score of *arr* modolo 10<sup>9</sup> + 7

**Constraints**

- 1 <= *n* <= 2 10<sup>5</sup>
- 1 <= *arr[i]* <= 10<sup>6</sup>

## Examples
- Example 1
   - Input
     ```
     n = 3
     arr = [1, 2, 3]
     ```
   - Output
     ```
     [2, 8, 19]
     ```
   - Explanation
      - The scores of each prefix are:
         - For *i = 1*, the prefix array is *[1]*. After applying the operations it becomes *[2]*, thus its score is 2.
         - For *i = 2*, the prefix array is *[1, 2]*. After applying the operations it becomes *[3, 5]*, thus its score is 8.
         - For *i = 3*, the prefix array is *[1, 2, 3]*. After applying the operations it becomes *[4, 6, 9]*, thus its score is 19.
      - Hence the answer is [2, 8, 9].
- Example 2
   - Input
     ```
     n = 3
     arr = [1, 2, 1]
     ```
   - Output
     ```
     2, 8, 14
     ```
   - Explanation
      - The scores of each prefix are:
         - For *i = 1*, the prefix array is *[1]*. After applying the operations it becomes *[2]*, thus its score is 2.
         - For *i = 2*, the prefix array is *[1, 2]*. After applying the operations it becomes *[3, 5]*, thus its score is 8.
         - For *i = 3*, the prefix array is *[1, 2, 1]*. After applying the operations it becomes *[3, 5, 6]*, thus its score is 14.
      - Hence the answer is [2, 8, 14].

## Solutions
- Solution 1
  ```java
  public static List<Integer> getPrefixScores(List<Integer> arr){
      List<Integer> arr1 = new ArrayList<Integer>();
      int n = arr.size();
      int max = arr.get(0);
      int m = 0;
      for(int i = 0 ; i < n ;i++){
          if(max < arr.get(i)){
              max = arr.get(i);
          }
          m = max;
          int sum = 0;
          for(int j = 0;j <= i; j++){
              m = arr.get(j) + m;
              sum = sum + m;
          }
          arr1.add(sum);
      }
      return arr1;
  }
  ```
