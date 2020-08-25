const setHeight = (element, height) => {
  try {
    element.style.height = height;
  } catch (e) {
    console.log(e);
  }
};

const setWidth = (element, width) => {
  try {
    element.style.width = width;
  } catch (e) {
    console.log(e);
  }
};
