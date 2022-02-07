console.log('1');
setTimeout((() => console.log('no time'))());
setTimeout(() => console.log('2'), 0);
setTimeout(() => console.log('3'), 2000);
console.log('4');
