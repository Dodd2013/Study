#include <cstdio>
int main() {
	int n, a[101],op[10]={100,50,10,5,2};
	while (scanf("%d", &n), n) {
		int x = 0;
		for (int i = 0; i < n; ++i) {
			scanf("%d", &a[i]);
		}
		for (int i = 0; i < n; ++i)
		{
			for(int j=0;j<5;j++){
				while (a[i] >= op[j]) {a[i] -= op[j]; x++;}
			}
			x+=a[i];
		}
		printf("%d\n", x);
	}
	return 0;
}