# String

- [**Concept**](#concept)
- [**Strategies**](#strategies)
- [**Common topics**](#common-topics)

## Concept
- **Substring**
   - A substring is a contiguous non-empty sequence of characters within a string.
- **Subsequence**
   - A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
- **Anagrams**
   - An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Strategies
- **Parentheses**
   - Possible solutions for solving parentheses problems:
      - *Stack*
         - Basic logic
            - Meet `(`, push the index into stack.
            - Meet `)`, pop the index of the corresponding `(` from stack.
         - Template
           ```
           Stack<Integer> stack = new Stack<>();
           for (int i = 0; i < s.length(); i++) {
               if (s.charAt(i) == '(') {               // meet (
                   stack.push(i);
               } else if (s.charAt(i) == ')') {        // meet )
                   if (!stk.isEmpty()) {
                       int leftIndex = stack.pop();
                   } else {                            // if there is no corresponding (
                   }
               } else {                                // meet other characters except parenthese
                   
               }
           }
           ```
         - Notes
            - Push the index rather than pushing the actual parenthese into the stack.
      - *Counter*
         - Basic logic
            - Meet `(`, counter increased by 1;
            - Meet `)`, counter decreased by 0;
- **Group string array**
   - Find a encoding logic, which 2 strings should be grouped together will have the same encoding value.
- **Palindrome**
   - Possible solutions for solving parentheses problems:
      - *Stack*
      - *2 Pointers* ([Meet pointers](../../solution-patterns/2_Pointers.md#meet-pointers))
         - Template
           ```java
           boolean isPalindrome(String s, int lo, int hi) {
               while (lo < hi) {
                   if (s.charAt(lo) != s.charAt(hi)) {
                       return false;
                   }
                   lo++;
                   hi--;
               }
               return true;
           }
           ```
   - Note
      - Need to consider 2 possible cases: length of palindrome is even or odd.
         - Example of even length palindrome: `abccba`
         - Example of odd length palindrome: `abcxcba`
         - Example problems for considering those 2 possible cases
            - [Longest Palindromic Substring](../../problems/string/Longest_Palindromic_Substring.md)
            - [Is Palindrome List](../../problems/linked_list/Is_Palindrome_List.md)
     
## Common topics
[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)

- **Check characteristics**
   - Symmetric
      - Parentheses
         - [Is Valid Parentheses](../../problems/string/parentheses/Is_Valid_Parentheses.md)
         - [Generate All Combinations of Parentheses](../../problems/string/parentheses/Generate_All_Combinations_Of_Parentheses.md)
         - [Remove Minimum Parentheses to Make Parentheses Valid](../../problems/string/parentheses/Remove_Minimum_Parentheses_To_Make_Parentheses_Valid.md)
         - [Get All Possible Strings by Removing Minimum Number of Invalid Parentheses](../../problems/string/parentheses/Get_All_Possible_Strings_By_Removing_Minimum_Number_Of_Invalid_Parentheses.md)
         - [Score of Parentheses](../../problems/string/parentheses/Score_Of_Parentheses.md)
         - [Longest Valid Parentheses Substring](../../problems/string/parentheses/Longest_Valid_Parentheses_Substring.md)
      - Palindrome
         - [Is Palindrome String](../../problems/string/palindrome/Is_Palindrome_String.md)
         - [Is Palindrome String by Removing One Char](../../problems/string/palindrome/Is_Palindrome_String_By_Removing_One_Char.md)
         - [Is Palindrome String by Only Considering Alphanumeric Characters](../../problems/string/palindrome/Is_Palindrome_String_By_Only_Considering_Alphanumeric_Characters.md)
         - [Can Characters of String Form Palindrome](../../problems/string/palindrome/Can_Characters_Of_String_Form_Palindrome.md)
         - [Longest Palindromic Substring](../../problems/string/Longest_Palindromic_Substring.md)
         - [Palindrome Partitioning](../../problems/string/palindrome/Palindrome_Partitioning.md)
         - 132 Palindrome Partitioning II
         - 1278 Palindrome Partitioning III
         - 1745 Palindrome Partitioning IV
- **Substring**
   - [Count Binary Substrings](../../problems/string/Count_Binary_Substrings.md)
   - [Longest Palindromic Substring](../../problems/string/Longest_Palindromic_Substring.md)
   - [Longest Valid Parentheses Substring](../problems/string/parentheses/Longest_Valid_Parentheses_Substring.md)
   - [Longest Substring Without Repeating Characters](../../problems/string/Longest_Substring_Without_Repeating_Characters.md)
   - [Longest Substring of Repeating Character by Replacement](../../problems/string/Longest_Substring_Of_Repeating_Character_By_Replacement.md)
- **Strings comparison**
   - Subsequences
      - [Distinct Subsequences](../../problems/string/Distinct_Subsequences.md)
      - 1143 Longest Common Subsequence
   - [Edit Distance](../../problems/string/Edit_Distance.md)
   - 14 Longest Common Prefix
- **Math**
   - [Get All Operator Combinations to Make Expression Match Target Number](../../problems/string/Get_All_Operator_Combinations_To_Make_Expression_Match_Target_Number.md)
   - Basic calculator
      - 224 Basic Calculator
      - 227 Basic Calculator II
      - [Basic Calculator III](../../problems/string/calculators/Basic_Calculator_III.md)
      - 770 Basic Calculator IV
   - Add
      - 67 Add Binary
      - 415 Add Strings
- **Combinations**
   - [Get All Operator Combinations to Make Expression Match Target Number](../../problems/string/Get_All_Operator_Combinations_To_Make_Expression_Match_Target_Number.md)
- **Sorting in custom order**
   - [Ancestral Names](../../problems/string/Ancestral_Names.md)
   - [Get Lexicographically Increasing Order from Words (Alien Dictionary)](../../problems/string/Get_Lexicographically_Increasing_Order_From_Words.md)
- **Conversion (Decoding and encoding)**
   - Decoding
      - [Decode String](../../problems/string/Decode_String.md)
      - [Decode Ways](../../problems/string/Decode_Ways.md)
   - Roman numerals
      - [Ancestral Names](../../problems/string/Ancestral_Names.md)
      - 12 Integer to Roman
      - 13 Roman to Integer
   - Other
      - [Convert Integer to English Words](../../problems/string/Convert_Integer_To_English_Words.md)
- **Manipulation**
   - Remove
      - [Remove K Digits to Make Smallest Integer](../../problems/string/Remove_K_Digits_To_Make_Smallest_Integer.md)
   - Rearrange
      - [Reorganize String for Two Adjacent Characters Are Not Same](../../problems/string/Reorganize_String_For_Two_Adjacent_Characters_Are_Not_Same.md)
   - Split
      - [Word Break](../../problems/string/Word_Break.md) (Return boolean - Check the string can be broken by words or not)
      - [Word Break II](../../problems/string/Word_Break_II.md) (Return list - Get all the possible word breaking combinations)
      - [Palindrome Partitioning](../../problems/string/palindrome/Palindrome_Partitioning.md)
      - [Restore IP Addresses](../../problems/string/Restore_IP_Addresses.md)
   - Rotate
      - 796 Rotate String
- **Input is string array**
   - *Grouping string array* (See strategies section)
      - [Group Shifted Strings](../../problems/string/Group_Shifted_Strings.md)
      - [Group Anagrams](../../problems/string/Group_Anagrams.md)
   - [Longest String Chain](../../problems/string/Longest_String_Chain.md)
   - 14 Longest Common Prefix
- **Other**
   - Case in real life
      - [Convert Absolute Path to Canonical Path](../../problems/string/Convert_Absolute_Path_To_Canonical_Path.md)
      - [Reformat Date](../../problems/string/Reformat_Date.md)
   - [Stars and Bars](../../problems/string/Stars_And_Bars.md)
      
[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)
