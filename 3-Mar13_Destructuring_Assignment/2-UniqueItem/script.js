
const getUnique=(arr)=>{
       return new Set(arr);
}

let values= [5,7,6,3,4,2,1,5,7,6,3];
let uniqueValues = getUnique(values);
console.log(uniqueValues);