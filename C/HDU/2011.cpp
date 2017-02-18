#include <cstdio>
double x[1002]={0,1};
int main() {
	int n,m;
	scanf("%d", &n);
	for (int i = 2; i < 1001; i++) {
		x[i]=x[i-1]+1.0/((i%2?1:-1)*i);
	}
	while (n--) {
		scanf("%d",&m);
		printf("%.2f\n",x[m]);
	}
	return 0;
}