
const compose = (...rest) => (x) => (
    rest.reduce((accumulator, f) => f(accumulator), x)
);


const useColor = color => element => {
    element.style.color = color;
    return element
};

const useBackgroundColor = backgroundColor => element => {
    element.style.backgroundColor = backgroundColor
    return element
}

const useText = text => element => {
    element.appendChild(text);
    return element
};

const useSize = width => height => element => {
    element.style.width = width;
    element.style.height = height;
    return element
};


var createPrimaryButton = compose(
    useColor('#ffffff'),
    useBackgroundColor('#00afb8'), 
    useText(document.createTextNode('確定')),
    useSize('156px')('30px')
);

var primaryButton = createPrimaryButton(document.createElement('Button'));



document.body.innerText = ""
document.body.appendChild(primaryButton);