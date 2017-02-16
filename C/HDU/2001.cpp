#include <stdio.h>
#include <math.h>
#define pow(x) ((x)*(x))
int main(){
	double x1,y1,x2,y2;
	while (~scanf("%lf%lf%lf%lf", &x1,&y1,&x2,&y2)) {
		printf("%.2f\n", sqrt(pow(x1-x2)+pow(y1-y2)));
	}
	return 0;
}