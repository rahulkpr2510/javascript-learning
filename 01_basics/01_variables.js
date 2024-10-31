const accountId = 144553
let accountEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rk@rk.com"
accountPassword = "25102510"
accountCity = "Goa"

/* 
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])