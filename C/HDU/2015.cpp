#include <cstdio>
int main(){
	int n,m,t;
	while(~scanf("%d%d",&n,&m)){
		t=n/m;
		int f=(m+m*m)/m;
		for(int i=0;i<t;i++){
			if(i!=0)printf(" ");
			printf("%d",f+i*2*m);
		}

		if(n%m!=0){
			int y=n%m;
			int x=(t*m)*2+1+y;
			printf(" %d",x);
		}
		puts("");
	}
	return 0;
}