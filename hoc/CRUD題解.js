const ProfileState = { 
    pictures: [
      { id: "1", title: "101大樓" }
    ]
};

const useState = (state) => (process) => (...rest) => process.apply(process, [state, ...rest]);
const createActionWithProfileState = useState(ProfileState);


const actions = {
    // insert
    insert : createActionWithProfileState((state, picture) => {
        state.pictures = [
            ...state.pictures,
            picture
        ];
    }),
    
    modify : createActionWithProfileState((state, id, title) => {
        state.pictures = state.pictures.map(picture => (
            picture.id === id  ? {...picture, title} : picture
        ));
    }),
    
    
    del : createActionWithProfileState((state, id) => {
        state.picture = state.pictures.filter(picture => (picture.id !== id))
    })
}