// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
//Test:

//in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))
// Output:





function makeAllCaps(words){
    return new Promise ((resolve,reject) =>{
        if (words.every(isString)){
            resolve(words.map((word) => word.toUpperCase()));
        }else{
            reject("Sorry,all valuse should be strings");
        }
    });
}

function sortWords(words){
    return new Promise((resolve,reject) => {
        if(words.length >= 4){
resolve(words.sort());
        }else{
            reject("Sorry array too short");
        }
    });
}
sortWords(["Good","morning","hi","friends"]).then(console.log)
.catch(console.error);
const words = ["hello","people","how","are","you"];
makeAllCaps(words)
.then((res) =>sortWords(res))
.then((res) =>console.log(res))
.catch((err) =>console.error(err));


function isString(arg){
    return typeof  arg === "string";
}


