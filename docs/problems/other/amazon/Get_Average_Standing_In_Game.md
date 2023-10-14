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
