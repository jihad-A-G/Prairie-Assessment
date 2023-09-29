//The aim of the exercise is to let the user enter a number and print all prime number from 2 till the input.


//this function chec if each number is prime and return true if yes, otherwise false, we will use to check each index from 2 till the input
const isPrime =(num)=>{
    for(let i=2; i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
// this function is used to print the prime numbers using a loop over all idexes and checking them with isPrime() function and then adding them into the
//output string if prime, and in the end log the numbers
const PrintPrimes = (num)=>{
    let str=``;
for(let i=2; i<num;i++){
    if(isPrime(i)){
        str +=i;
        str+= " ";
    }
}
console.log(str);
}
PrintPrimes(7);