# Accounts Merge

## Alias
- Leetcode (721): [Accounts Merge](https://leetcode.com/problems/accounts-merge/)

## Problem
- Given a list of accounts where each element `accounts[i]` is a list of strings.
   - The first element of `accounts[i]` is the name.
   - The rest elements of `accounts[i]` are the emails.
- Merge all the accounts which belongs to the same person.
   - 2 accounts belongs to the same person if there are some common emails existing in both accounts.
- Additional requirements
   - For each account, emails should be sorted in alphabetical order.
   - For each account, remove duplicated emails to keep each email unique.

## Solutions
- **Solution 1: Union find**
   - Idea
       - To group these emails, each group need to have a or `parent`.
       - At the beginning, set each email as its own representative.
       - Emails in each account naturally belong to a same group, and should be joined by assigning to the same parent (let's use the parent of first email in that list);
  ```java
  class Solution {
      public List<List<String>> accountsMerge(List<List<String>> acts) {
          Map<String, String> owner           = new HashMap<>();
          Map<String, String> parents         = new HashMap<>();
          Map<String, TreeSet<String>> unions = new HashMap<>();

          for (List<String> a : acts) {
              for (int i = 1; i < a.size(); i++) {
                  parents.put(a.get(i), a.get(i));      // At the beginning, set each email as its own parent.
                  owner.put(a.get(i), a.get(0));
              }
          }

          for (List<String> a : acts) {
              String p = find(a.get(1), parents);
              for (int i = 2; i < a.size(); i++)
                  parents.put(find(a.get(i), parents), p);
          }

          for(List<String> a : acts) {
              String p = find(a.get(1), parents);
              if (!unions.containsKey(p)) unions.put(p, new TreeSet<>());
              for (int i = 1; i < a.size(); i++)
                  unions.get(p).add(a.get(i));
          }

          List<List<String>> res = new ArrayList<>();
          for (String p : unions.keySet()) {
              List<String> emails = new ArrayList(unions.get(p));
              emails.add(0, owner.get(p));
              res.add(emails);
          }
          return res;
      }

      // find parent
      private String find(String s, Map<String, String> p) {
          return p.get(s) == s ? s : find(p.get(s), p);
      }
  }
  ```

- **Solution 2: BFS**
   - Idea
      - Build graph that connects all emails have relationships.
      - BFS traverse all nodes in every single component and generate each result list individually.
  ```java
  class Solution {
      public List<List<String>> accountsMerge(List<List<String>> acts) {
          Map<String, Set<String>> graph  = new HashMap<>();     // <email, <neighbor emails>> (connects all emails with same name.)
          Map<String, String> emailToName = new HashMap<>();     // <email, name>

          // step 1: build graph that connects all emails have relationships
          for (List<String> account : acts) {
              String name = account.get(0);
              for (int i = 1; i < account.size(); i++) {
                  graph.putIfAbsent(account.get(i), new HashSet<>());
                  emailToName.put(account.get(i), name);
                  if (i != 1) {
                      graph.get(account.get(i)).add(account.get(i - 1));
                      graph.get(account.get(i - 1)).add(account.get(i));
                  }
              }
          }

          // step 2: BFS traversal to traverse all nodes in every single component and generate each result list individually
          List<List<String>> result = new ArrayList<>();
          Set<String> visited = new HashSet<>();
          for (String email : graph.keySet()) {
              if (!visited.contains(email)) {
                  visited.add(email);
                  List<String> newList = bfs(graph, visited, email);
                  Collections.sort(newList);
                  newList.add(0, emailToName.get(newList.get(0)));
                  result.add(newList);
              }
          }
          return result;
      }

      public List<String> bfs(Map<String, Set<String>> graph, Set<String> visited, String startPoint) {
          List<String> newList = new ArrayList<>();
          Queue<String> queue = new LinkedList<>();
          queue.offer(startPoint);

          while(!queue.isEmpty()) {
              int size = queue.size();
              for (int i = 0; i < size; i++) {
                  String curEmail = queue.poll();
                  newList.add(curEmail);
                  Set<String> neighbors = graph.get(curEmail);
                  for (String neighbor : neighbors) {
                      // WARING: DO NOT FORGET to check whether current email has been visited before
                      if (!visited.contains(neighbor)) {
                          visited.add(neighbor);
                          queue.offer(neighbor);
                      }
                  }
              }
          }
          return newList;
      }
  }
  ```

- **Solution 3: DFS**
   - Idea
      - Build graph that connects all emails have relationships.
      - DFS traverse all nodes in every single component and generate each result list individually.
  ```java
  class Solution {
      public List<List<String>> accountsMerge(List<List<String>> acts) {
          Map<String, Set<String>> graph  = new HashMap<>();     // <email, <neighbor emails>> (connects all emails with same name.)
          Map<String, String> emailToName = new HashMap<>();     // <email, name>

          // step 1: build graph that connects all emails have relationships
          for (List<String> account : acts) {
              String name = account.get(0);
              for (int i = 1; i < account.size(); i++) {
                  graph.putIfAbsent(account.get(i), new HashSet<>());
                  emailToName.put(account.get(i), name);
                  if (i != 1) {
                      graph.get(account.get(i)).add(account.get(i - 1));
                      graph.get(account.get(i - 1)).add(account.get(i));
                  }
              }
          }

          // step 2: DFS traversal to traverse all nodes in every single component and generate each result list individually
          List<List<String>> result = new ArrayList<>();
          Set<String> visited = new HashSet<>();
          for (String email : graph.keySet()) {
              if (!visited.contains(email)) {
                  visited.add(email);
                  List<String> newList = new ArrayList<>();
                  dfs(newList, graph, visited, email);
                  Collections.sort(newList);
                  newList.add(0, emailToName.get(newList.get(0)));
                  result.add(newList);
              }
          }
          return result;
      }

      public void dfs(List<String> result, Map<String, Set<String>> graph, Set<String> visited, String curPoint) {
          result.add(curPoint);
          Set<String> neighbors = graph.get(curPoint);
          for (String neighbor : neighbors) {
              if (!visited.contains(neighbor)) {
                  visited.add(neighbor);
                  dfs(result, graph, visited, neighbor);
              }
          }
      }
  }
  ```
  
- **Solution 4: Brute force**
   - Step 1: Check every 2 account combinations by 2 brute force pointers
      - If 2 accounts have same emails
         - Merge the 1st account's emails to the 2nd account.
         - Remove the 1st account.
   - Step 2: For each account
      - Unify the emails of the account.
      - Sort the emails of the account.

  ```java
  public List<List<String>> accountsMerge(List<List<String>> accounts) {        
      for (int i = 0; i < accounts.size() - 1; i++)  {
          for (int j = i + 1; j < accounts.size(); j++) {
              if (accounts.get(i).get(0).equals(accounts.get(j).get(0))) {
                  if (hasSameEmail(accounts.get(i), accounts.get(j))) {      // If 2 accounts have same emails
                       mergeAccounts(accounts.get(j), accounts.get(i));      // Merge the 1st account's to the 2nd account
                       accounts.remove(i);                                   // Remove the 1st account
                       i--;                                                  // Don't increase the i value
                       break;
                  }
              }
          }
      }
        
      for (int i = 0; i < accounts.size(); i++) {
          if (!accounts.get(i).get(0).equals(" ")) {
              List<String> list = accounts.get(i).stream().distinct().collect(Collectors.toList()); // Remove the duplicates in the account
              Collections.sort(list.subList(1,list.size()));
              accounts.set(i, list);
          }
      }
        
      return  accounts;
  }
    
  public boolean hasSameEmail(List<String> account1, List<String> account2) {   
      return !Collections.disjoint(account1.subList(1,account1.size()), account2.subList(1,account2.size()));
  }
    
  public void mergeAccounts(List<String> account1, List<String> account2) {
      account1.addAll(account2.subList(1,account2.size()));
  }
  ```
