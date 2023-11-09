const a=[10,20,30,40,50];
const b=2;
function sum(x,y){
    
    let c=0;
    let s=0;
    for(i=0;i<=(x.length-1);i++){
        c=x[i]+(y+1);
        s=s+c;
        console.log(c);
    }
    console.log(`Total sum is ${s}`);
}
sum(a,b);