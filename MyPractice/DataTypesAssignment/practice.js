function Converter(kilo){
    const meter = kilo * 1000
    const centimeter = meter * 10
    console.log("meter=", meter)
    console.log("centimeter=", centimeter)
}
Converter(2)

function area(radius){
    const Area = radius * radius * 3.14
    console.log("Area =",Area)
}
area(2)

function arthmetic(a,b){
    const sum = a+b
    const sub = a-b
    const div = a/b
    const mul = a*b
    console.log("the arthmetic operations are =", sum, sub, div, mul)
}
arthmetic(2,2)