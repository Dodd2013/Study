#include <cstdio>
#include <climits>
int main() {
	int n, a[201], min;
	while (scanf("%d", &n), n) {
		a[200] = INT_MAX, min = 200;
		for (int i = 0; i < n; i++) {
			scanf("%d", &a[i]);
			if (a[i] < a[min])min = i;
		}
		if(min!=0)a[min] ^= a[0] ^= a[min] ^= a[0];
		for (int i = 0; i < n; i++) {
			if (i != 0)printf(" ");
			printf("%d", a[i]);
		}
		puts("");
	}
	return 0;
}