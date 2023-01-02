//average of even numbers from 0 to 100

let i = 0;
let sum = 0;
let count = 0;

while(i<=100){
  if(i%2==0){
    sum = sum+i;
    count++;
  }
  i++;
}
console.log(sum/count);

