function fibonacciTab(n){
    if(n<=1) return n
    let dp=[0,1]
    for( let i=2;i<=n;i++){
        dp[i]= dp[i-1]+dp[i-2]
    }
    return {"series":dp, "sum":dp[n]}
}


console.log(fibonacciTab(10));