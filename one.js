let x = 2
function f(){
    function g(){
        console.log(x)
    }
    let x = 1
    g()
}
f()