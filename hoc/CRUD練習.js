const ProfileState = { 
    pictures: [
      { id: "1", title: "101大樓" }
    ]
};

const useState = (state) => (process) => (...rest) => process.apply(process, [state, ...rest]);
const createActionWithProfileState = useState(profileState);


const actions = {
    insert : createActionWithProfileState((state, picture) => {
        // 利用 es6 陣列解構
        // return 
        console.log('state', state)
        console.log('picture', picture)
    }),
    
    modify : createActionWithProfileState((state, id, title) => {
        // 利用 map
        // return 
        console.log('state', state)
        console.log('id', id)
        console.log('title', title)
    }),
    
    
    del : createActionWithProfileState((state, id) => {
        // 利用 filter
        // return 
        console.log('state', state)
        console.log('id', id)
    })
}