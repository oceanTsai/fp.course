/*
    const useLogErrorHelper = function(task) {
      return function(element, style){
        try{
          task && task(element, style);
        }catch(e){
          console.log(e);
        }
      }
    };
 */

const useLogErrorHelper = (task) => (element, style) => {
  try {
    task && task(element, style);
  } catch (e) {
    console.log(e);
  }
};

const setWidth = (element, width) => {
  element.style.width = width;
};

const setHeight = (element, height) => {
  element.style.height = height;
};

const setWidthWithLogErrorHelper = useLogErrorHelper(setWidth);
const setHeightWithLogErrorHelper = useLogErrorHelper(setHeight);

document.body.innerText = "";
const button = document.createElement("Button");
button.style.border = "1px solid #cccccc";
button.innerText = "BUTTON";
document.body.innerText = "";
document.body.append(button);

setWidthWithLogErrorHelper(button, "100px");
setHeightWithLogErrorHelper(button, "30px");
