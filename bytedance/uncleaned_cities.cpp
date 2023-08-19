#include<bits/stdc++.h>
using namespace std;

using namespace std;
int main() {
    
    int m,n;
    cin>>m>>n;
    int cleaned[n+1];
    for(int i=0;i<n;i++)
    {
        cleaned[i] =  0;
    }
    for(int i=0;i<m;i++)
    {
        int a,b;
        cin>>a>>b;
        cleaned[a]++;
        cleaned[1+b]--;
    }
    for(int i=1;i<n;i++)
    {
        cleaned[i]+=cleaned[i-1];
    }
    int uncleanedCities = 0;
    for(int i=0;i<n;i++)
    {
        if(cleaned[i] == 0)
        {
            uncleanedCities++;
        }
    }
    cout<<uncleanedCities;
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    return 0;
}
