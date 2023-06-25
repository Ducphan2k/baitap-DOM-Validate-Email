function isEmail(str) {
  regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
  if (regexp.test(str)) {
    console.log("Email hop le");
  } else {
    console.log("Email khong hop le");
  }
}
// email hop le
isEmail("a@gmail.com");
isEmail("ab@yahoo.com");
isEmail("abc@hotmail.com");

// email khong hop le
isEmail("@gmail.com");
isEmail("ab@gmail.");
isEmail("@#abc@gmail.com");
 