let number ="12"
let number1="12px"
let number2="p12px"
let number3="12.8"
let number4="12.7px"

console.log(
    typeof(number),
    typeof(number1),    
    typeof(number2),
    typeof(number3),
    typeof(number4),
)
console.log(
    number=parseInt(number),
    typeof(number)
)

console.log(
    number1=parseInt(number1),
    typeof(number1)// number kısmını parse ediyor ve değer olarak bize 12 dönüyor
)
console.log("number1=12px",
    number1=Number(number1),
    typeof(number1)// number ile yaptığımızda bize NaN değeri dönüyor çünkü içinde string ifade de var 
)
console.log("number2=p12px",
    number2=parseInt(number2),
    typeof(number2)// parseInt,parseFloat da olsa başında string ifade varsa NaN değer döner ama türünü numbera çevirir yinede 
)
console.log("number2=p12px",
    number2=parseFloat(number2),
    typeof(number2)// parseInt,parseFloat da olsa başında string ifade varsa NaN değer döner ama türünü numbera çevirir yinede 
)
console.log("number3=12.8(inetegar)",
    number3=parseInt(number3),
    typeof(number3)
)
console.log("number3=12.8(float)",
    number3=parseFloat(number3),
    typeof(number3)
)
console.log("number3=12.8(number)",
    number3=Number(number3),
    typeof(number3)
)
console.log(
    "number4=12.7px(integar)",
    number4=parseInt(number4),
    typeof(number4)
)

console.log("number4=12.7px(float)",
    number4=parseFloat(number4),
    typeof(number4)
)
console.log("number4=12.7px(Number)",
    number4=Number(number4),
    typeof(number4)
)
// number to string
let b = 5
b=b.toString(),
console.log(
    "b'nin türü numberdan",
    typeof(b),
    "'e döndü."
)