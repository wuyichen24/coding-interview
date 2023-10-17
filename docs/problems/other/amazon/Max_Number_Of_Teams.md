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

![103407v6fbz92zye09whq3](https://github.com/wuyichen24/coding-interview/assets/8989447/a93f3d92-56e5-4273-b9b1-498f1df035e2)
![103409s30dq1x4u13h3063](https://github.com/wuyichen24/coding-interview/assets/8989447/854a41db-7c9f-46bb-9af2-69c015d0b1a2)

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

## References
- https://www.1point3acres.com/bbs/thread-1015023-1-1.html
- https://leetcode.com/discuss/interview-question/1602092/amazon-oa-max-of-teams-with-skill-difference#:~:text=Explanation%20%3A%20Two%20teams%20can%20be,not%20exceeding%20K%20%3D%202%20value.
- https://leetcode.com/discuss/interview-question/1594880/amazon-oa-questions-countmaximumteams
- https://leetcode.com/discuss/interview-question/1474497/amazon-oa
