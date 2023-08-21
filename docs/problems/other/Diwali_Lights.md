# Diwali Lights

## Problem
Alex and Rome have bought a new LED light set for Diwali containing N LEDS, However, it is broken, On careful observation. Alex found out that the ith LED turns on at time Li anf turns off at time Ri. These times are calculated as the time after turining on Power supply. Rome considers her house will lit at a particular moment if K LEDS are lit at that moment. They only want to hang K such bulbs such that there is at least some moment when they will all light up. You have to find number of ways of choosing K such lamps. Give the answer mod 1^9+7

## Example
- Example 1
   - Input
     ```
     N = 3
     K = 1
     1 1
     2 2
     3 3
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - We have to find only one light such that it lights up at some point. We can see that choosing any light will do. So, there are 3 ways.
- Example 2
   - Input
     ```
     N = 3
     K = 2
     1 1
     2 2
     3 3
     ```
   - Output
     ```
     0
     ```
   - Explanation
     ```
     The first light is lit at 1, the second at 2, and the third at 3. So, there is no way to choose 2 lights and let them lit at the same time.
     ```
- Example 3
   - Input
     ```
     N = 5
     K = 2
     1 3
     2 4
     3 5
     4 6
     5 7
     ```
   - Output
     ```
     7
     ```
   - Explanation
      - There are 7 ways:
         - Light 0 and Light 1
         - Light 1 and Light 2
         - Light 2 and Light 3
         - Light 3 and Light 4
         - Light 0 and Light 2
         - Light 1 and Light 3
         - Light 2 and Light 4
- Example 4
   - Input
     ```
     N = 2
     K = 1
     1 5
     10 12
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - We have to find only one light such that it lights up at some point. We can see that choosing any light will do. So, there are 2 ways.
        
## Solution
- Solution 1
  ```cpp
  int diwaliLights(int n, int k, vector<vector<int>> lights) {
      vector<int> L(n), R(n);
      for (int i = 0; i < n; ++i){
          L[i] = light[i][0];
          R[i] = light[i][1];
      }
      vector<int> all; // all numbers
      for (int i = 0; i < ssize(L); ++i){
          all.push_back(L[i]);
          all.push_back(R[i]);
      }
      ranges::sort(all); // sort
      all.resize(unique(begin(all), end(all)) - begin(all)); // delete dup
      unordered_map<int, int> mp;
      for (int i = 0; i < ssize(all); ++i){ // assign a rank
          mp[all[i]] = i;
      }
      vector<int> add(ssize(all)), lose(ssize(all));
      for (int i = 0; i < ssize(L); ++i){
          ++add[mp[L[i]]]; // put rank into it
          ++lose[mp[R[i]]];
      }
      const int N = 200002, M = (int) 1e9+7;
      array<long long, N> fact{1, 1}, invfact{1, 1}, inv{0, 1};
      for (int i = 2; i < N; ++i){ // mod inverse stuff
          inv[i] = M - M/i*inv[M%i] % M;
          fact[i] = i * fact[i-1] % M;
          invfact[i] = invfact[i-1] * inv[i] % M;
      }
      auto comb = [&](int a, int b){ // comb fun
          return fact[a] * invfact[a-b] % M * invfact[b] % M;
      };
      long long ans = 0;
      for (int i = 0, sum = 0; i < ssize(all); ++i){
          sum += add[i];
          if (sum >= k && lose[i]){ // if sum is enough, and that something ends, we add to ans.
              for (int j = max(1, k - sum + lose[i]); j <= min(lose[i], k); ++j){
                  ans += comb(lose[i], j) * comb(sum - lose[i], k - j) % M;
                  ans %= M;
              }
          }
          sum -= lose[i];
      }
      cout << ans; // output ans
  }
  ```

## References
- [Number of ways of lighting K bulbs(Bytedance OA)](https://leetcode.com/company/bytedance/discuss/2579754/Number-of-ways-of-lighting-K-bulbs(Bytedance-OA))
