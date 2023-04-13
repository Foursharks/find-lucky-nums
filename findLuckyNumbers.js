// // Write your code below this line.
// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)

function luckyNumbers(n) { 
    let arr = []; 
    for(let i=0; i<n; i++){
        // Create random number
        let x = Math.ceil(Math.random()*10);
        //push random number to arr
        arr.push(x); 
        console.log(arr); 
    }
    // loop through array and check if there are any duplicates
    for(let x=0; x<arr.length; x++){
        for (let y = x+1; y<arr.length; y++){
            if(arr[x] === arr[y]){
                arr.splice(x, 1); 
                console.log(`there was a duplicate, so I removed it`, arr[x],arr[y], arr)
            }
        }
    }
}
luckyNumbers(12); //This is saying: give me 12 random integer numbers that are not repeated.
