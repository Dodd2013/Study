#include <cstdio>
char prime[3000]={0};
int main(){
	int x,y;
	for(int i=2;i<3000;i++){
		for(int j=2;i*j<3000;j++){
			prime[i*j]=1;
		}
	}
	while(scanf("%d%d",&x,&y),x!=0||y!=0){
		int i;
		for(i=x;i<=y;i++){
			if(prime[i*i+i+41]){
				puts("Sorry");
				break;
			}
		}
		if(i>y)puts("OK");
	}
	return 0;
}