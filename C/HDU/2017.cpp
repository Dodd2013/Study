#include <cstdio>
char str[10000];
int main() {
	int n;
	scanf("%d", &n);
	while (n--) {
		int count=0;
		scanf("%s", str);
		for (int i = 0; str[i] != '\0'; i++) {
			if(str[i]<='9'&&str[i]>='0'){
				count++;
			}
		}
		printf("%d\n",count);
	}
	return 0;
}