const deleteItem = ['1', '3', '5', '7'];


const pictureList = [
    {id: '1', title: '陽明山'},
    {id: '2', title: '聖母山'},
    {id: '3', title: '拉拉山'},
    {id: '4', title: '阿里山'},
    {id: '5', title: '泰山'},
    {id: '6', title: '枕頭山'},
];


const nextPictureList = pictureList.filter(
    ({id}) => deleteItem.indexOf(id) < 0
);