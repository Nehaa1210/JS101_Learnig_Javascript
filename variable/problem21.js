let a = "Luffy";
let b = "Zoro";
let c ="Sanj";
if((a==b) && (b==c) &&(c==a)){
  console.log("All the names are same");
}
else if(((a==b) && (b==c)) || ((b==c) &&(c==a)) || ((c==a) && (a==b))){
  console.log();
}
else if ((a!=b) && (b!=c) &&(c!=a)){
  console.log("All are different");
}