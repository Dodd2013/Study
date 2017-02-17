#include <cstdio>
#include <math.h>
int main(){
	int n,m;
	while(~scanf("%d%d",&n,&m)){
		double ans=0;
		double t=n*n;
		while(m--){
			t=sqrt(t);
			ans+=t;
		}
		printf("%.2f\n",ans);
	}
	return 0;
}