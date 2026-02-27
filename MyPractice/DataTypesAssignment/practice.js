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

function marks(a,b){
    const sub1marks = a
    const sub2marks = b
    const TotalMarks = a+b
    const percentage = ((TotalMarks)/200)*100
    console.log("Total Marks =", TotalMarks, "Percentage =", percentage)
}
marks(70,70)

function rectangle(a,b){
    const Area = a*b
    const Perimeter = 2*(a+b)
    console.log("Area =",Area,"Perimeter =",Perimeter)
}
rectangle(2,3)