#include <cstdio>
#include <math.h>
int main(){
	double x;
	while(~scanf("%lf",&x)){
		printf("%.2f\n",fabs(x));
	}
	return 0;
}