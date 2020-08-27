const compose = (...rest) => (x) => (
    rest.reduce((accumulator, f) => f(accumulator), x)
);


function cutLeft(str, newStr) {
    return str.replace(/(^[\s]*)/g, newStr);
}

function cutRight(str, newStr) {
    return str.replace(/([\s]*$)/g, newStr);
}
  

//  定義一個 useReplace
// 將replace 因變數給提出做成變數參數

