#include <cstdio>
int main()
{
    int n, m, a;
    scanf("%d%d%d", &n, &m, &a);
    printf("%I64d", (long long)((n - 1 + a) / a) * (long long)((m - 1 + a) / a));
    return 0;
}