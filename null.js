const ex={a:'am',b:'',c:'  ',d:'hi'};
function empty(obj){
    let t={};
    for(i in obj){
        t[i]=obj[i].trim()==''?null:obj[i];
    }
    console.log(t)
}

empty(ex);