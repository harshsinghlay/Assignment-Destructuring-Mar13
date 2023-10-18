

const randomElements = (arr)=>{
     [x,y,...arr]=arr;
     const z = arr.pop();
     return [x,y,z];
}

const arr = [1,2,3,4,5];
console.log(randomElements(arr));