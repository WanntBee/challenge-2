function isValidPassword(givenPassword) {
    return /[A-Z]/       .test(givenPassword) &&
           /[a-z]/       .test(givenPassword) &&
           /[0-9]/       .test(givenPassword) &&
           givenPassword.length >= 8;

}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())