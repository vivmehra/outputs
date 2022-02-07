var obj = {
    x: 1,
    getX: function () {
       return this.x;
    }
};

var globalGetX = obj.getX;

console.log('output should be undefined', globalGetX());
console.log('outpust should be 1', obj.getX()); 
