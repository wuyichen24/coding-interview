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
- **Constraints**
   - 1 <= x <= 10<sup>9</sup>
   - 1 <= y <= 10<sup>9</sup>
   - items[i][0] = 1 or items[i][0] = 2 where 0 < = i < n
   - 1 < items[i][0] <= 10<sup>9</sup> where 0 < = i < n
- **Examples**
   - Example 1
      - Input
        ```
        10
        8
        3
        3
        1 2 10
        1 3 20
        1 5 1
        ```
      - Output
        ```
        30
        ```
      - Explanation
         - The TikTok gift card is worth $10 and Amazon gift card is worth $8. There are 3 items from TikTok store, but 0 items from Amazon store. Tom can purchase the 1st item with $2 from TikTok store, and the 2nd item with $3 from TikTok store. In total, these gifts will bring a happiness value of 30.
   - Example 2
      - Input
        ```
        10
        10
        3
        3
        1 11 10
        1 7 2
        2 10 10
        ```
      - Output
        ```
        12
        ```
      - Explanation
         - The TikTok gift card is worth $10 and Amazon gift card is worth $10. There are 2 items from TikTok Store and 1 item from Amazon Store. Tom can purchase the 2nd item from TikTok with $7 (happiness value of 2), and the 3rd item from Amazon store.

