const compose = (...rest) => (x) => (
    rest.reduce((accumulator, f) => f(accumulator), x)
);


function cutLeft(str, newStr) {
    return str.replace(/(^[\s]*)/g, newStr);
}

function cutRight(str, newStr) {
    return str.replace(/([\s]*$)/g, newStr);
}
  