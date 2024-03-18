function userDetails(username) {
  if (username) {
    console.log(userCity); // undefined
    console.log(userAge); // Error
    var userCity = "Bareilly";
    let userAge = 11;
  }
  console.log(userCity);
  console.log(userAge);
}

userDetails("Rahit");
