const arr=['welcome','to','ooty','nice','to','backspacertwse','you'];
function result(a){
    let long="";
    for(i=0;i<=(arr.length-1);i++){
        if(arr[i].length>long.length){
            long=arr[i];
            
        }
    }
    console.log(long);
}
result(arr);