# Longest String Chain

## Solutions
- Solution 1
   - Idea
      - Sort the words by word's length. (also can apply bucket sort)
      - For each word, loop on all possible previous word with 1 letter missing.
      - If we have seen this previous word, update the longest chain for the current word.
      - Finally return the longest word chain.
```java
public int longestStrChain(String[] words) {
    Map<String, Integer> dp = new HashMap<>();
    Arrays.sort(words, (a, b)->a.length() - b.length());
    int res = 0;
    for (String word : words) {
        int best = 0;
        for (int i = 0; i < word.length(); ++i) {
            String prev = word.substring(0, i) + word.substring(i + 1);
            best = Math.max(best, dp.getOrDefault(prev, 0) + 1);
        }
        dp.put(word, best);
        res = Math.max(res, best);
    }
    return res;
}
```
