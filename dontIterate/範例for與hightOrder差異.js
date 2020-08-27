for (i=0; i < elements.length; i++) {
    el = $(elements[i]);
    if ( hasProp ) {
        el.prop('disabled', false);
    }
    else {
        el.removeAttr('disabled');
    }
}

const nextElements = Array.from(elements).forEach((el)=>{
    hasProp 
        ? $(el).prop('disabled', false)
        : $(el).removeAttr('disabled')
})

//--------------------------------
//
//--------------------------------
const list  = [];
for (i=0; i < elements.length; i++) {
    el = $(elements[i]);
    if ( hasProp ) {
        el.prop('disabled', false);
        // 另一件事情
        list.push(el);
        //
    }
    else {
        el.removeAttr('disabled');
    }
}