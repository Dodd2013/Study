#include <cstdio>
int main(){
	int n;
	while(~scanf("%d",&n)){
		if(n<0||n>100)puts("Score is error!");
		else if(n<60)puts("E");
		else if(n<70)puts("D");
		else if(n<80)puts("C");
		else if(n<90)puts("B");
		else puts("A");
	}
	return 0;
}