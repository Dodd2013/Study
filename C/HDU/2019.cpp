#include <cstdio>
#include <algorithm>
using namespace std;
int a[1000];
int main(){
    int n,m;
    while(scanf("%d%d",&n,&m),n||m){
        for(int i=0;i<n;i++){
            scanf("%d",&a[i]);
        }
        a[n]=m;
        sort(a,a+n+1);
        for(int i=0;i<=n;i++){
            if(i!=0)printf(" ");
            printf("%d",a[i]);
        }
        printf("\n");
    }
    return 0;
}