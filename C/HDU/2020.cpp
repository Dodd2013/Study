#include <cstdio>
#include <cstdlib>
#include <algorithm>
using namespace std;
bool cmp(int a,int b){
	return abs(b)<abs(a);
}
int main() {
	int n,a[101];
	while (scanf("%d", &n), n) {
		for (int i = 0; i < n; ++i) {
			scanf("%d",&a[i]);
		}
		sort(a,a+n,cmp);
		for (int i = 0; i < n; ++i) {
			if(i!=0)printf(" ");
			printf("%d",a[i]);
		}
		printf("\n");
	}
	return 0;
}