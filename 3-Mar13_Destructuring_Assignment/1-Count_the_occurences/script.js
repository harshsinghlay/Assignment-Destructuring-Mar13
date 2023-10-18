

const wordCounter = (input)=>{
    let arr = input.split(" ");
    console.log(arr);
    let wordCountMap = new Map();
   for (let word of arr) {
     if(wordCountMap.has(word)){
        wordCountMap.set(word,wordCountMap.get(word)+1);
     }else{
        wordCountMap.set(word,1);
     }
   }
    return wordCountMap;
}

let str  = "Harsh singhlay is a average programmer , and harsh singhlay friend aman kardam is a awosome programmer";
let result  = wordCounter(str);
console.log(result);
