var customerName = "bob";

function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase();
};
function setBestCustomer(){
   bestCustomer = 'not bob';
}
function overwriteBestCustomer(newFavorite){
  bestCustomer = newFavorite;
}
const leastFavoriteCustomer = "Anna"; 
function changeLeastFavoriteCustomer(){
  return leastFavoriteCustomer = "Someone-else"; 
}
