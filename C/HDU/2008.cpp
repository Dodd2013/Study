#include <cstdio>
#include <math.h>
#define eps 0.00001
int main(){
	int n;
	double x;
	while(scanf("%d",&n),n){
		int a=0,b=0,c=0;//负数，零，正数
		while(n--){
			scanf("%lf",&x);
			if(x<0)a++;
			else if(fabs(x)<eps)b++;
			else c++;
		}
		printf("%d %d %d\n",a,b,c);
	}
	return 0;
}