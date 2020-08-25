// 宣告一個標準的 print 方法
var print = function(){
    console.log(this);
};

print();   //  window


// 宣告一個實體
var profile = {title : '104'};

// 重新 bind
var log = print.bind(profile);

log(); // 呼叫方法 得到 profile 實體

