var a = 2;
var b = 1;

const add = (x, y)=> {
    a += 1;
    return x + y
};

console.log('2 + 1 = ' + (2 + 1));
console.log('2 + 1 = ' + add(a, b));
console.log('2 + 1 = ' + add(2, 1));
console.log('2 + 1 = ' + add(a, b));