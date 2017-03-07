#include <cstdio>
int f[100]={0,1,2,3},n;
int main(){
	for(int i=4;i<55;i++){
		f[i]=f[i-1]+f[i-3];
	}
	while(scanf("%d",&n),n){
		printf("%d\n", f[n]);
	}
	return 0;
}