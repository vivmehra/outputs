var cat = {name:"Athena"};
function swap(feline){
    feline.name = "Wild";
    feline = {name:"tabby"}
}
swap(cat);
console.log(cat.name)