
const minmax = (arr )=>{
    return {min : Math.min(...arr),
    max: Math.max(...arr)}
}

let obj = minmax([5,8,4,2,6,9,14,3,5,7]);
console.log(obj.max);
console.log(obj.min);