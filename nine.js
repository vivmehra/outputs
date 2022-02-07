var obj = {
    numbers: [ 1, 2, 3, 4, 5 ],
    multipler: 2,
    printMultiplicationTable: function() {
        this.numbers.forEach(function( number ) {
            console.log( number + ' * ' + this.multipler + ' = ' + ( number * this.multipler ) );
        });
    }
};
obj.printMultiplicationTable();
var obj1 = new obj.printMultiplicationTable();
console.log(obj1);
