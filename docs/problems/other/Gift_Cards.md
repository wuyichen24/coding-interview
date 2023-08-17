# Gift Cards

## Alias

## Problem
TTBank has gift cards, and they come in three different denominations: $10, $30, and $50. Jugg has collected a lot of them!

Jugg would like to use N cards to buy an item, which costs M dollars. However, he doesn't want to leave a remaining balance on any cards he chooses.

How many different ways is Jugg able to buy the item?

- Input Format
   - The first line contains two integers N, M. N is the number of cards, and M is the cost of that item.
- Output Format
   - An integer, representing the number of different ways to buy the item, using the exact number of cards required.
- Input Constraint
   - 30%: N <= 100
   - 60%: N <= 1000
   - 100%: N <= 5000, M <=2500000

## Examples
- Example 1
   - Input
     ```
     4 80
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - Jugg must use 4 cards to buy an $80 item.
      - There are 2 ways to do this:
         - ﻿﻿﻿2 $10 gift cards and 2 $30 gift cards. (10+10+30+30=80)
         - ﻿﻿﻿3 $10 gift cards and 1 $50 gift card. (10+10+10+50=80)
