#include<bits/stdc++.h>

using namespace std;



int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDO*/
    
    int n,m;
    cin>>n>>m;
    int ten=0,thirty=0,fifty=0,count=0;
    for(ten=0;ten<=n;ten++)
    {
        for(thirty=0;thirty<=n;thirty++)
        {
            if(ten+thirty>n)
            {
                break;
            }
            fifty = n - ten - thirty;
            if(10*ten+30*thirty+50*fifty == m)
            {
                count++;
            }
        }
    }
    cout<<count;
    return 0;
}
