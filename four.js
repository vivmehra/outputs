console.log(1);
setTimeout(()=>console.log(2), 1000)
setTimeout(()=>console.log(3), 0)
const  p = Promise.resolve(4)
p.then((item)=>console.log(item))
console.log(5);