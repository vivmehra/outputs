var a = 10;
var fxn = (a) => {
  var a = 20;
  console.log(this.a);
}
fxn(30);
console.log(this.a)