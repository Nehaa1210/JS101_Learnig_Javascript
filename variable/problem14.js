let stored_username = "Neha";

let stored_password = "Dracula";

let input_username = "Neha";

let input_password = "Dracu";

if(stored_username==input_username){
  if(stored_password==input_password){
    console.log("login successful");
  }
  else{
    console.log("You are using wrong password");
  }
}
else{
  console.log("This username doesn't exist");
}
