#include <stdio.h>
#include <math.h>
char a[6];
int n,x,y,i,l,t,f;
int main(){
	scanf("%d",&n);
	while(n--){
		scanf("%d%d",&x,&y);
		for(i=x;i<=y;i++){
			t=i,l=5,f=1;
			if(t<1000)f=0;
			while(l>=0){
				a[l]=t%10;
				t=t/10;
				if((a[l]>6)||(l<5&&fabs(a[l+1]-a[l])>4)||(l<4&&a[l]==a[l+1]&&a[l+1]==a[l+2]))f=0;
				l--;
			}
			if(f)printf("%06d\n",i);
		}
		puts("");
	}
}