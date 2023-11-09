const first={a:"hi",b:"hello"};
const second={c:"welcome",b:"ooty",e:"to"};
function mer(x,y){
    y['d']=y.b;
    delete y.b;
    let sol={...x,...y}
    console.log(sol);
}
mer(first,second);

