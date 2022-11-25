// Write your solution in this file!
var customerName = 'bob'
//Modify customerName variable by uppercasing it.
function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}
//Declare a global variable from inside a function.
function setBestCustomer(){
    bestCustomer = 'not bob';
}
// See consequences of variable declaration in global scope.
//Overwrite the best customer.
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
// Fix scope.
// Unsuccessfully reassign least favorite customer.
const leastFavoriteCustomer = '';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "somebody else"
}
