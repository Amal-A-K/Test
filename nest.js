const obj = {a:{b:{c:10}}};
function nest(obj){
    
    console.log(obj?.a?.b?.c);
    console.log(obj?.a?.b?.c?.r);
}
nest(obj);

