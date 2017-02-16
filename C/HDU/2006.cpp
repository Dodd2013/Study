#include <stdio.h>
int a[1000];
int main() {
	int n, x;
	while (~scanf("%d", &n)) {
		int ans = 1;
		for (int i = 0; i < n; i++) {
			scanf("%d", &x);
			if(x%2)ans*=x;
		}
		printf("%d\n",ans);
	}
	return 0;
}