const accountId = 21
let accountEmail="thisismymail@google.com"
var accountPassword="Lovefor69"
accountCity="Venice"

// accountId= 2 //not allowed

accountEmail="mymail@gpt.com"
accountPassword="143143"
accountCity="Kuala Lumpur"

let accountState;

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope {}
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
