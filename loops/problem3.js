//sum of all the multiples from 0 to 30

let i = 0;
let sum = 0;

while(i<=30){
  if(i%3==0){
    sum = sum +i;
  }
  i++;
}
console.log(sum);