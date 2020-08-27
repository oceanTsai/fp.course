const selected = [1,2,3,4,5,6];

const language = {
    1: 'java',
    2: 'javaScript',
    3: 'python',
    4: 'ruby',
    5: 'c#',
    6: 'kotlin'
};



const languageList = (selected || []).map( (id) => ({
    id,
    language:  language[id]
}));

