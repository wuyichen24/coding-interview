# Unique Average Experience

## Problem
There are *n* developers working at Amazon where the *i<sup>th</sup>* developer has the experience points *experience[i]*. The company decided to pair the developers by iteratively pairing the developers with the highest and lowest remaining experience points for a hackathon. The *combined experience* of a pair is the average of the experience points of the two developers. Find the number of unique values among the combined experience of the pairs formed.

### Example
*experience = [1, 4, 1, 3, 5, 6]*

There are n = 6 developers. The pairs formed are (1,6), (1,5), and (4,3) making their experience points 3.5, 3, and 3.5 respectively. There are 2 distinct values, 3 and 3.5, so return 2 as the answer.

### Function Description
Complete the function *findUniqueValues* in the editor below.

*findUniqueValues* has the following parameter:
- int experience[n]: the experience points for each developer

### Returns
- int: the number of unique values among the combined experience points of the pairs formed

### Constraints
- 2 <= n <= 10<sup>5</sup>
- n is an even number
- 1 <= experience[i] <= 10<sup>9</sup>

## Examples
- Example 1
   - Input
     ```
     [1,1,1,1,1,1]
     ```
   - Output
     ```
     1
     ```
- Example 2
   - Input
     ```
     [1,100,10,1000]
     ```
   - Output
     ```
     2
     ```

## Solutions
- Solution 1: 2 pointers
   - Idea
      - Sort the experiences
      - Use 2 pointers start from each end, calculate the average experience and add it to a set for unifying the values.

  ```java
  public class UniqueAverageExperience {
      public static void main(String[] args) {
          List<Integer> experience = new ArrayList<>();
          experience.add(1);
          experience.add(4);
          experience.add(1);
          experience.add(3);
          experience.add(5);
          experience.add(6);
          System.out.println(findUniqueValues(experience));
      }

      static int findUniqueValues(List<Integer> experience) {
          Collections.sort(experience);

          int i = 0;
          int j = experience.size()-1;

          Set<Double> uniques = new HashSet<>();
          while (j > i) {
              double average = ((double) experience.get(i) + (double) experience.get(j)) / 2.0;
              uniques.add(average);
              i++;
              j--;
          }

          return uniques.size();
      }
  }
  ```
![174520s8lq73ltxzz7iqix](https://github.com/wuyichen24/coding-interview/assets/8989447/88d2b020-f929-4ea0-8443-99663f00640c)
![174534lgpawjdddg8u547p](https://github.com/wuyichen24/coding-interview/assets/8989447/c75b864b-df10-4b5c-8967-cd2fc92ee800)

