// 原本
const val = Math.pow(5, 2);

// 柯里化拆解
const usePowBase = exponent => base => base ** exponent;

// 
const powWithBase2 = usePowBase(2);

console.log(powWithBase2(5));
