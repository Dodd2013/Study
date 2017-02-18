#include <cstdio>
int main(){
	int n,m,ta,t,sum,count;
	while(~scanf("%d%d",&n,&m)){
		count=0;
		if(n>m)n^=m^=n^=m;
		for(int i=n;i<=m;i++){
			t=i,sum=0;
			while(t){
				ta=t%10;
				sum+=ta*ta*ta;
				t/=10;
			}
			if(sum==i){
				if(count!=0)printf(" ");
				printf("%d",sum);
				count++;
				
			}
		}
		if(count==0)printf("no");
		puts("");
	}
	return 0;
}