
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
    element.appendChild(document.createTextNode(text));
    return element
};

const useSize = width => height => element => {
    element.style.width = width;
    element.style.height = height;
    return element
};


// 你還需要 策略模式嗎？
var createPrimaryButton = compose(
    useColor('#ffffff'),
    useBackgroundColor('#00afb8'), 
    useText('確定'),
    useSize('156px')('30px')
);

var primaryButton = createPrimaryButton(document.createElement('Button'));
document.body.innerHTML = ''
document.body.appendChild(primaryButton);