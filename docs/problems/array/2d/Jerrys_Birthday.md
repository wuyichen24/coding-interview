# Tom and Jerry: Jerry's Birthday

## Alias

## Problem
Tom is a genius cat, except that he doesn't know how to catch a mouse.

Tom has a TikTok gift card worth `x` dollars, and an Amazon gift card worth `y` dollars. 
A TikTok gift card is only able to purchase gifts  at the Tiktop store. Similarly, a Amazon gift card only allowed to purchase gifts at an Amazon store.

Today is Jerry's (the mouse) birthday. Tom wants to buy exactly **2 distinct** presents for both Jerry and himself to celebrate their friendship. Tom is given a **0-indexed** 2D integer array `items` with dimension **n x 3** representing the available items at both stores.

- **Input Format For Custom Testing**
   - The 1st line contains an integer `x`, denoting Tom's TikTok gift card value.
   - The 2nd line contains an integer `y`, denoting Tom's Amazon gift card value.
   - The 3rd line contains an integer `n`, denoting the `items` arrays row dimension.
   - The 4th line line should be an integer `3`, denoting the `items` array's column dimension.
   - Each line `i` of the `n` subsequent lines (0 <= i < n) contains 3 integers.
      - `items[i][0]` represents the source of an item. It has value `1` if it is from TikTok store. It has value `2` if it is from Amazon store.
      - `items[i][1]` represents the price of an item.
      - `items[i][2]` represents the happiness value this item brings.

Tom is a verstile cat. With his 2 gift vards and his intelligence, return a single integer representing the **maximum happiness** Tom may bring to Jerry's birthday party by purchasing exactly 2 distinct presents from either store.

- **Function Description**
   - Complete the function `maximumHappiness` in the editor below. The function returns a single integer representing the **maximum happiness** Tom may bring to Jerry's birthday party by perchasing exactly 2 distinct presents from either store.
   - `maximumHappiness` has the following parameter(s):
      - `x`: Tom's TikTok gift card value.
      - `y`: Tom's Amazon gift card value.
      - `items`: a **0-indexed** 2D array with dimension `n * 3` representing the available items at both stores.
