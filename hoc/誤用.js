const jobs = [{name:'工程師'}, {name:'老師'}];

const list = [];
jobs.map(job => {
  if(job.name === '工程師'){
    list.push(job);
  }
});

console.log(list); 