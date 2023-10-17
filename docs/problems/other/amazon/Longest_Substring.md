# Longest Substring

## Problem
Amazon allows customers to add reviews for the products they bought from their store. The reivew must follow Amazon's community guidelines in order to be published.

Suppose that Amazon has marked *n* strings that are prohibited in reviews. They assign a score to each review that denotes how well it follows the guidelines. The score of a review is defined as the longest contiguous substring of the review which does not contain any string among the list of *n* prohibited strings. A string contains a prohibited word if has a contigous substring that matches a word from the prohibited list, ignoring the case. Given a review and a list of prohibited strings, calculate the review score.

### Example
review = "GoodProductButScrapAfterWash"
prohibitedWords = ["crap", "odpro"]

Some of the substrings that do not contain a prohibited words are
- ProductBut
- rappAfterWash
- dProductButScu
- Wash

The longest substring is "dProductButScra", return the length, 15.
