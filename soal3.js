function checkEmail(email) {
    var regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
      }
      
  console.log(checkEmail('emailtest@binar.com'));
  console.log(checkEmail('emailtest@binar.co.id'));
  console.log(checkEmail('emailtest@binar'));
  console.log(checkEmail('emailtest'));
  console.log(checkEmail('3322'));
  console.log(checkEmail());
  