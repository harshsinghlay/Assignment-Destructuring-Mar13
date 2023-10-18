

const swapping =(x,y)=>{
    [y,x] = [x,y];
    const arr = [x,y];
    return arr;
}
console.log(swapping(5,4));