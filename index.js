var calculations = require("./calculations");
var print = require("womxnbuild-frame-print");

function solveCalc (l,b){
    print("Perimeter is");
    console.log(calculations.perimeter(l,b));
}

solveCalc(2,4);