
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

const useWhiteText = useColor('#ffffff');
const useBlackText = useColor('#000000');

const useGreenBackground = useBackgroundColor('#00afb8');
const useGrayBackground = useBackgroundColor('gray');

const useOk = useText('確定');
const useCancel = useText('取消');

const useSM = useSize('156px')('30px');


var createPrimaryButton = compose(
    useWhiteText,
    useGreenBackground, 
    useOk,
    useSM
);

var createSecondaryButton = compose(
    useBlackText,
    useGrayBackground, 
    useCancel,
    useSM
);

var useConfirmLayout = createPrimaryButton => createSecondaryButton => () => {
    var container = document.createElement('DIV');
    container.style.width = '100%';
    container.style.border = '1px solid #cccccc';
    var primaryButton = createPrimaryButton(document.createElement('Button'));
    var secondaryButton = createSecondaryButton(document.createElement('Button'));
    container.appendChild(primaryButton);
    container.appendChild(secondaryButton);
    return container
}

var confirmPanel = useConfirmLayout(createPrimaryButton)(createSecondaryButton);


document.body.innerHTML = ''
document.body.appendChild(confirmPanel());