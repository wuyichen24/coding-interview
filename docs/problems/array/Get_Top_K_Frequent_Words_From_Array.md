# Get Top K Frequent Words from Array

## Alias
- Leetcode (692): [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)

## Problem
- Return the K most frequent words from the input array.
- The result list be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

## Solutions
- **Solution 1: Hashmap (frequency counter) + Custom class + Priority queue**
   - Idea
      - Use hashmap to count the frequency of each word
      - Use Custom class for sorting (sort by frequency and alphabetical order)
      - Priority queue to keep top K frequent words
   - Steps
      - Create a HashMap and count the frequency of each word.
      - Create a priority queue and keep the size of K.
      - Add all words from queue to list.
      - Reverse the list (Make the most frequent word first).
  ```java
  class Solution {
      public List<String> topKFrequent(String[] words, int k) {
          Map<String, Integer> map = new HashMap<>();
          for (String word : words) {
              map.put(word, map.getOrDefault(word, 0) + 1);
          }
        
          Queue<WordAndFreq> queue = new PriorityQueue<>(); 
          for (String key : map.keySet()) {
              queue.add(new WordAndFreq(key, map.get(key)));
              if (queue.size() > k) {
                  queue.poll();
              }
          }
        
          List<String> resultList = new ArrayList<>();
          while(!queue.isEmpty()) {
              resultList.add(queue.poll().word);
          }
        
          Collections.reverse(resultList);                // Make the most frequency word first
        
          return resultList;
      }
  }

  class WordAndFreq implements Comparable<WordAndFreq> {
      public String word;
      public int    freq;
    
      public WordAndFreq(String word, int freq) {
          this.word = word;
          this.freq = freq;
      }
    
      public int compareTo(WordAndFreq wf) {
          int result = (this.freq - wf.freq);              // Poll the least frequency word
          if (result != 0) {
              return result;
          } else {
              return -this.word.compareTo(wf.word);
          }
      }
  }
  ```
