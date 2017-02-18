#include <cstdio>
int main(){
	int n,max,min,sum,x;
	while(~scanf("%d",&n)){
		max=min=-1,sum=0;
		for(int i=0;i<n;i++){
			scanf("%d",&x);
			if(x>max||max==-1)max=x;
			if(x<min||min==-1)min=x;
			sum+=x;
		}
		//printf("sum:%d max:%d min:%d\n",sum,max,min);
		printf("%.2f\n",(sum-max-min)/(double)(n-2));
	}
	return 0;
}