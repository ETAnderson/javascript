function findHighestPrimeFactor (limit) {
 var roundedSqRt = Math.round(Math.sqrt(limit));
  for(var i = roundedSqRt; i >= 2; i--) {  
  if(limit % i == 0 && findHighestPrimeFactor(i) == 1) {
    return i; 
    }
  }  
  return 1;  
}  

console.log(findHighestPrimeFactor(600851475143,775146));