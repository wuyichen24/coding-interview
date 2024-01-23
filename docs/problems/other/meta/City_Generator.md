# City Generator

## Problem
Given a list of city names and their corresponding populations, write a program to output a city name subject to the following constraint: the probability of the program to output a city's name is based on its population divided by the sum of all cities' population. Assume the program will be repeatedly called many times.

For example:
- NY: 7M
- SF: 5M
- LA: 8M

The probability to generate NY is 7/20, SF is 5/20 and LA 8/20.

## Solutions
- **Solution 1: Prefix sum array**
   - Idea
      - Use prefix sum array to build a random generator.
   - Step
      - Constructor
         - Initialize prefix sum array and the map between index to city name.
         - Calculate prefix sum array.
      - Generator
         - Generate a random number between 0 to totalSum
         - See the random number drop in which range of the prefix sum array.

  ```java
  public class CityGenerator {
      private int[] prefixSums;
      private int totalSum;
      private Map<Integer, String> indexToCity;   // map index to city name

      public CityGenerator (Map<String, Integer> population) {
          this.prefixSums = new int[population.size()];
          this.indexToCity = new HashMap<>();

          int prefixSum = 0;
          int i = 0;
          for (String key: population.keySet()) {
              prefixSum += population.get(key);
              this.prefixSums[i] = prefixSum;
              indexToCity.put(i, key);
              i++;
          }
          this.totalSum = prefixSum;
      }

      public String generate() {
          // Get a random number between 0 and totalSum
          double target = this.totalSum * Math.random();
          int i = 0;

          // Run a linear search to find which range that random number dropping in
          for (; i < this.prefixSums.length; ++i) {
              if (target < this.prefixSums[i])
                  return indexToCity.get(i);
          }

          // Give a default return (Should not reach here)
          return indexToCity.get(i - 1);
      }
  }
  ```
