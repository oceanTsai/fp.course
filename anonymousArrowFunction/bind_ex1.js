var print = function () {
    console.log(this);
};
  
var profile = {
    name: "104"
};

print();

print.bind(profile)();
  