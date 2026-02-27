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