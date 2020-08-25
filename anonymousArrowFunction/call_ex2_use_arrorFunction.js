//------------------------------
// 使用標準函式，來看看 this 指向。 
//------------------------------

var print = () => {
    console.log('this', this);
};

var company = {
    name: '104'
};


print();
print.call(company);