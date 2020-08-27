// 原本
const val = Math.pow(5, 2);

// 柯里化拆解
const usePowBase = base => exponent => base ** exponent;

// 
const powWithBase5 = usePowBase(5);

console.log(powWithBase5(2));
