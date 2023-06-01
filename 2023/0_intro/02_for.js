/*
    если данных много
*/

let arr = [123,22,12,55,7];

for (let i=0; i<arr.length; i++) {
    console.log(arr[i], arr[i]%2!=0?`нечетное`:`четное`);
}

for (let elm of arr) {
    console.log(elm, elm%2!=0?`нечетное`:`четное`);
}

arr.forEach((elm) => console.log(elm, elm%2!=0?`нечетное`:`четное`));
