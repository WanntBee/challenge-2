function checkTypeNumber(givenNumber) {
    if(givenNumber % 2 == 0) {
      return("genap");
    }
    else {
      return("ganjil");
    }
  }
  
  
  console.log(checkTypeNumber(10)) //Genap
  console.log(checkTypeNumber(3)) //Ganjil
  console.log(checkTypeNumber("3")) //Error, invalid data type
  console.log(checkTypeNumber({})) //Error, invalid data type
  console.log(checkTypeNumber([])) //Error, invalid data type
  console.log(checkTypeNumber()) // error, brp where is the parameter
  