function climbStairs(n){
    if(n<=2) return n
    prev1=2, prev2=1;
    for(let i=3; i<=n;i++){
        let curr= prev1+prev2
        prev2=prev1
        prev1=curr
    }
    return prev1
}


console.log(climbStairs(5)); 