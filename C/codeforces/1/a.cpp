#include <cstdio>
int main()
{
    int n, m, a;
    scanf("%d%d%d", &n, &m, &a);
    printf("%d", int((n + 1 - a) / a) * int((m + 1 - a) / a));
    return 0;
}