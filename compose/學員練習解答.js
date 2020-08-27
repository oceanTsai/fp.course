const compose = (...rest) => (x) => (
    rest.reduce((accumulator, f) => f(accumulator), x)
);

const useReplace = regexp => newStr => string => string.replace(regexp, newStr)

const cutLeftSpace = useReplace(/(^[\s]*)/g)("");
const cutRightSpace = useReplace(/([\s]*$)/g)("");


const trim = compose(cutLeftSpace, cutRightSpace);