const useReplace = substr => newSubstr => string => string.replace(substr, newSubstr);

const javaToJs = useReplace(/java/gi)('javascript');
const oopToFp = useReplace(/oop/gi)('FP');
