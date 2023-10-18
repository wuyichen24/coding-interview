# Get Average Standing in Game

## Problem
As an aspiring developer, you are required to develop a result analysis service for a car game on Amazon games.

There are *n* event records of *d* players who participated in different events in form of *[race id, player's id, player's time]*. For some *race id*, a player's racking is decided based on the increasing order of their finish time. If two players have the same finish time, the one with a lower id is ranked lower.

The average standing of any player is the average of their various positions in all the races they completed in, expressed in the form of a fraction *p/q*. If there are multiple possible such fractions, reduce them such taht *p* is the minimum possible.

Return a 2-dimensional array where each element *i* contains the *i<sup>th</sup>* player's *p* and *q* as described above. If the player did not complete in any race the player's *p* and *q* values are both *-1*.

### Example
For example, if *n = 3*, *d = 3*, and *records = [[1, 1, 100], [1, 2, 200], [2, 1, 500]]*.

| | Race 1 | Race 2 |
|---|---|---|
| Player 0 | Did not participate | Did not participate |
| Player 1 | 100s (1st position) | 500s (1st position) |
| Player 2 | 200s (2nd position) | Did not participate |

There are a total of *d = 3* players.

- Player 0 did not complete in any race, so p<sub>0</sub> = -1 and q<sub>0</sub> = -1.
- Player 1 completed in 2 races and came first in both. Their average standing is (1 + 1)/2. Reduce as described so p<sub>1</sub> = 1 and q<sub>1</sub> = 1.
- Player 2 completed in 1 races and came second. Their average standing is (2)/1. Thus,  p<sub>2</sub> = 2 and q<sub>2</sub> = 1.

return [[-1,-1], [1,1] [2,1]]

### Function Description
Complete the function *getAverageStanding* in the editor below.

getAverageStanding has the following parameters:
- int d: the number of players.
- int records[n][3]: each record[i] contains [race id, player id, player time]

### Return 
- int[d][2]: the average standings for each player.

## Examples
- Example
   - Input
     ```
     d = 5
     n = 5
     records = [
       [25,1,1000],[25,2,2000],[25,4,200],[30,2,90],[30,1,90],[30,4,90],[35,1,50000]
     ]
     ```
   - Output
     ```
     [[-1,-1],[4,3],[5,2],[-1,-1],[2,1]]
     ```

## Solutions
- **Solution 1**
   - Steps
      - Create a map to aggregate results by race
         - Key: race id
         - Value: priority queue of int array, each element is [player id, time].
      - Create a map to aggregate results by player
         - Key: player id
         - Value: list of int, each element is the rank for certain race.
      - Calculate the total number of race and total rank per player.

  ```java
  public class AverageStanding {
      int[][] getAverageStanding(int d, int records[][]) {
          // key: race id, value: ranking, priority queue -> [player id, time]
          Map<Integer, Queue<int[]>> raceMap = new HashMap<>();

          // Create a map to aggregate results by race
          for (int i = 0; i < records.length; i++) {
              raceMap.putIfAbsent(records[i][0], new PriorityQueue<int[]>((a, b)->{
                  int cmp = Integer.compare(a[1], b[1]);
                  if (cmp != 0) {
                      return cmp;
                  }
                  return Integer.compare(a[0], b[0]);
              }));
              raceMap.get(records[i][0]).add(new int[]{ records[i][1], records[i][2] });
          }

          Map<Integer, List<Integer>> playerMap = new HashMap<>();

          // Create a map to aggregate results by player
          for (int raceId : raceMap.keySet()) {
              int rank = 1;
              while (!raceMap.get(raceId).isEmpty()) {
                  int[] result = raceMap.get(raceId).poll();
                  playerMap.putIfAbsent(result[0], new ArrayList<>());
                  playerMap.get(result[0]).add(rank);
                  rank = rank + 1;
              }
          }

          int [][] results = new int[d][2];
          // Calculate the total number of race and total rank per player.
          for (int playerId = 0; playerId < d; playerId++) {
              if (playerMap.get(playerId) == null) {          // If player didn't participate any race
                  results[playerId][0] = -1;
                  results[playerId][1] = -1;
                  continue;
              }

              int numRace = playerMap.get(playerId).size();
              int totalRank = 0;
              for (int rank : playerMap.get(playerId)) {
                  totalRank = totalRank + rank;
              }
              int[] finalResult = reduceFraction(new int[]{totalRank, numRace});
              results[playerId][0] = finalResult[0];
              results[playerId][1] = finalResult[1];
          }

          return results;
      }

      int[] reduceFraction(int[] fraction) {
          int numerator = fraction[0];
          int denominator = fraction[1];

          // Find the greatest common divisor (GCD) using Euclidean algorithm
          int gcd = findGCD(Math.abs(numerator), Math.abs(denominator));

          // Reduce the fraction by dividing both numerator and denominator by the GCD
          numerator /= gcd;
          denominator /= gcd;

          int[] reducedFraction = {numerator, denominator};
          return reducedFraction;
      }

      int findGCD(int a, int b) {
          if (b == 0) {
              return a;
          }
          return findGCD(b, a % b);
      }
  }
  ```

## References
- https://leetcode.com/discuss/interview-question/3719223/Amazon-SDE-OA-2023%3A-Find-Maximum-Profitable-Months

![091220fg4b4jjfd53if4ik](https://github.com/wuyichen24/coding-interview/assets/8989447/399e183e-6c14-4a3c-91d1-80b94b84eb66)
![091228bt1ssj1q1gchhyye](https://github.com/wuyichen24/coding-interview/assets/8989447/2081f7f6-839e-43d5-968e-a06c09bdb400)
![091241enlo1apxnz0rmzw0](https://github.com/wuyichen24/coding-interview/assets/8989447/d1ec4ade-aff8-423b-8df0-eab7c46243c8)
