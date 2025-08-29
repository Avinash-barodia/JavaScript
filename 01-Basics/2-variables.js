const accountId = 144552
let accountEmail = "avinash@gmail.com"
var accountPass = "1234"
accountCity = "Jaipur"

accountEmail = "Ab@ab.com"
accountPass = "211212"
accountCity = "Bengaluru"


/*
Don't use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity])

