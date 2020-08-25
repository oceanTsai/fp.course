var print = function(){
    console.log(this);
};

var company = {
    name: '104'
};


print(); // Window

print.call(company);  // company
