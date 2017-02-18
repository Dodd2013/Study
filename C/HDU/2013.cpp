#include <cstdio>
int f(int n){
	if(n==1)return 1;
	return (f(n-1)+1)*2;
}
int main(){
	int n;
	while(~scanf("%d",&n)){
		printf("%d\n",f(n));
	}
	return 0;
}