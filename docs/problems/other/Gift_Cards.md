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

## Solution
- Solution 1: Backtracking
   - Logic for backtracking function:
      - Stop condition:
         - If the number of cards has selected has reach the `N`, return 1 (it is one valid solution).
      - Iteration:
         - Check each possible gift card:
            - Calculate the new total amount.
            - If we select the last card, make sure new total amount is same with the target amount, also make sure the current card is larger than or equal to the previous selected card.
                - Call the backtracking function to select next card.
                - Add the number of valid solutions from sub problems.
            - If we select the card before the last card, make sure new total amount is less than the target amount (keep room when selecting last card), also make sure the current card is larger than or equal to the previous selected card.
                - Call the backtracking function to select next card.
                - Add the number of valid solutions from sub problems.
      - Stop condition 2:
          - Return the total number of valid solution.
   - **Edge cases**
      - `[10, 10, 10, 50]` and `[10, 10, 50, 10]` should be considered as one valid solution (the position of the cards should not be considered).
  ```java
  public int giftCard(int n, int m) {
      int[] giftCards = new int[]{10, 30, 50};
      return backtracking(0, giftCards, 0, 0, n, m);
  }

  public static int backtracking(int numOfCardsSelected, int[] giftCards, int currentTotalAmount, int prevSelectedCard, int n, int m) {
      if (numOfCardsSelected == n) {
          return 1;
      }

      int solutionCounter = 0;

      for (int i = 0; i < giftCards.length; i++) {
          int newTotalAmount = currentTotalAmount + giftCards[i];
          // for selecting the last card, it must match the exact target amount
          // also make sure only consider [10, 10, 10, 50] and ignore [10, 10, 50, 10] (current selected card should be >= previous selected card)
          if ((numOfCardsSelected == n - 1) && (newTotalAmount == m) && giftCards[i] >= prevSelectedCard) {
              int subSolutionCounter = backtracking(numOfCardsSelected + 1, giftCards, newTotalAmount, giftCards[i], n, m);
              solutionCounter = solutionCounter + subSolutionCounter;
          }
          // for selecting the card before the last card, the new total amount should be less than the target amount
          // also make sure only consider [10, 10, 10, 50] and ignore [10, 10, 50, 10] (current selected card should be >= previous selected card)
          if ((numOfCardsSelected < n - 1) && (newTotalAmount < m)  && giftCards[i] >= prevSelectedCard) {
              int subSolutionCounter = backtracking(numOfCardsSelected + 1, giftCards, newTotalAmount, giftCards[i], n, m);
              solutionCounter = solutionCounter + subSolutionCounter;
          }
      }
      return solutionCounter;
  }
  ```
