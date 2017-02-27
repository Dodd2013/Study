#include <cstdio>
int main(){
	int n,m,t;
	while(~scanf("%d%d",&n,&m)){
		t=n/m;
		int f=1+m;
		for(int i=0;i<t;i++){
			if(i!=0)printf(" ");
			printf("%d",f+i*2*m);
		}

		if(n%m!=0){
			printf(" %d",t*m*2+1+n%m);
		}
		puts("");
	}
	return 0;
}