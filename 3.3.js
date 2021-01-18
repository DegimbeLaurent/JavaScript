let arr = [1,2,3,4,5];

let arr2 = [5,4,3,2,1];

console.log(arr.concat(arr2));

arr2.forEach(element => {
    arr.push(element);
});
console.log(arr);