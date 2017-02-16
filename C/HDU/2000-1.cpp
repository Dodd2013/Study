#include <stdio.h>
#include <algorithm>
using namespace std;
int main(){
	char a[5];
	while (~scanf("%s", a)) {
		sort(a,a+3);
		printf("%c %c %c\n", a[0], a[1], a[2]);
	}
	return 0;
}