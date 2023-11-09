const a="welcome";
const b="IO";
function solution(x,y){
    let result="";
    let index=0;
    for(i=(x.length-1);i>-1;i--){
        index++;
        result=x[i]+result;
        if(index%3===0){
            result=b+result;
        }
    }
    console.log(result);
}
solution(a,b);
