const quest = "What is in isolation ?"; 

function answer(q) {
  let b = q.split("");
  for (let i = 0; i < b.length; i++) {
    if (b[i] === "i") {
      for(let j = i;j<b.length;j++){
        if(b[j]!="s"){
          i++;

        }else{
          console.log(`Found "is" at index ${i}`);
        }
      }
      
    }
  }
}

answer(quest);

