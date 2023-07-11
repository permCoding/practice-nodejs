/*
    если данных много
*/

let arr = [123,22,12,55,7];

for (let i=0; i<arr.length; i=i+1) { // цикл по индексам
    console.log(arr[i], arr[i]%2!=0? `нечетное`: `четное`);
}

for (let elm of arr) { // цикл по коллекции
    console.log(elm, elm%2!=0? `нечетное`: `четное`);
}

arr.forEach(elm => console.log(elm, elm%2!=0? `нечетное`: `четное`));

// lambda
// LINQ - язык интегрированных запросов: WHERE==filter; SELECT==map
