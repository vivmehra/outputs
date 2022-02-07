const obj = {
    someName : 'some name',
    f1 : ()=>console.log(this.someName),
    f2 : ()=>console.log(this.someName)
}
const a = obj.f1;
a();