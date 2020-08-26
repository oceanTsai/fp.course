const taiwanMountainList = [
    {id: '1', title: '陽明山'},
    {id: '2', title: '拉拉山'},
    {id: '3', title: '阿里山'},
    {id: '4', title: '泰山'},
    {id: 'a', title: '枕頭山'},
];


const japanMountainList = [
    {id: '11', title: '岩手山'},
    {id: '12', title: '富士山'},
    {id: '13', title: '雲仙岳'},
    {id: '14', title: '谷川岳'},
    {id: '15', title: '秋名山'},
    {id: 'a', title: '枕頭山'},
];


const commonMountain = taiwanMountainList.filter(
    (twMountain) => japanMountainList.findIndex(jpMountain =>(twMountain.id === jpMountain.id ) ) > 0
);

console.log(commonMountain);