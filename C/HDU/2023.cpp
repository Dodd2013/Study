#include <cstdio>
int a[100][10];
double g[10];
int main() {
	int n, m,flag,count=0;
	while (~scanf("%d%d", &n, &m)) {
		count=0;
		for (int i = 0; i < m; ++i) {
			g[i] = 0;
		}
		for (int i = 0; i < n; ++i) {
			a[i][9] = 0;
		}
		for (int i = 0; i < n; ++i) {
			for (int j = 0; j < m; ++j) {
				scanf("%d", &a[i][j]);
				g[j] += a[i][j];
				a[i][9] += a[i][j];
			}
		}
		for (int i = 0; i < n; ++i) {
			if (i != 0)printf(" ");
			printf("%.2f", a[i][9] * 1.0 / m);
		}
		printf("\n");
		for (int i = 0; i < m; ++i) {
			g[i] = g[i] * 1.0 / n;
			if (i != 0)printf(" ");
			printf("%.2f", g[i]);
		}
		printf("\n");
		for (int i = 0; i < n; ++i) {
			flag=1;
			for (int j = 0; j < m; ++j) {
				if (a[i][j] < g[j]) {
					flag = 0; 
					break;
				}
			}
			if(flag)count++;
		}
		printf("%d\n\n",count);//注意题目中每个实例后跟一个空行
	}
	return 0;
}