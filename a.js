var test = document.getElementById("primary");
function makePrimeArray(n){
    let PrimeArray = [];
    for(let i = 1; i<=n;i++){
        if(Primary(i)){
            PrimeArray.push(i);
        }
    }
    function Primary(i){
        if(i === 1){
            return false;
        }
        for (let Num = 2;Num<i;Num++){
            if(i % Num === 0){
                return false;
            }
        }
        return true;
    }
    return PrimeArray;
}
var ans = makePrimeArray(1000);
for(i = 0;i<ans.length;i++){
    console.log(ans[i]);
    test.innerHTML += `${ans[i]},`;
}

