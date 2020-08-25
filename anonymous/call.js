// 方法
var print = function(){
    console.log(this, 'this');
};

print(); // Window

var company = {company: '104'};

print.call();


// lambda call 

var log = () => {
 console.log(this, 'this')
};


log.call(company);