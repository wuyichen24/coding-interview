# Max Number of Teams

## Problem
Amazon is hosting a team hackathon.
1. Each team will have exactly teamSize developers.
2. A developer’s skill level is denoted by skill[i].
3. The difference between the maximum and minimum skill levels within a team cannot exceed a threshold, maxDiff.

Determine the maximum number of teams that can be formed from the contestants.

**Example**
skill = [3, 4, 3, 1, 6, 5]
teamSize = 3
maxDiff = 2

At most, 2 teams can be formed: [3, 3, 1] and [4, 6, 5].
The difference between the maximum and minimum skill levels is 2 in each case,
which does not exceed the threshold value oft.

**Function Description**
Complete the function countMaximumTeams in the editor below.

`countMaximumTeams` has the following parameter(s):
- int skill[n]: the developers’ skill levels
- int teamSize: the number of developers to make up a team
- int maxDiff: the threshold value

**Returns:**
int: the maximum number of teams that can be formed at one time

## Solutions
- Solution 1: Comparison

  **Python**
  ```python
  def countMaximumTeams(arr, teamSize, maxDiff):
      answer = 0

      arr.sort()

      i = 0
      while i <= (len(arr) - teamSize):
          if arr[i + teamSize - 1] - arr[i] <= maxDiff:
              answer += 1
              i += teamSize
          else:
              i += 1
      return answer
  ```

  **Java**
  ```java
  public static int countMaximumTeams(int[] arr, int teamSize, int maxDiff) {
      int answer = 0;

      Arrays.sort(arr);

      int i = 0;
      while (i <= (arr.length - teamSize)) {
          if (arr[i + teamSize - 1] - arr[i] <= maxDiff) {
              answer += 1;
              i += teamSize;
          } else {
              i += 1;
          }
      }
      return answer;
  }
  ```
- Solution 2: Backtracking
  ```
  ```
