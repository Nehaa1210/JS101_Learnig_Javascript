let n=9;
let count1 = 0;
let count2 = 0;
for(let i=1; i<=9; i++){

  if(n % i == 0){
    count1++;
    
  }
  else{
    count2++
  }
}
console.log(count1,count2);