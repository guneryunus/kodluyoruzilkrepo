/* boolean  -------- (2 değer döner (true||false))*/
let name 
let isActive = Boolean(name)// booleanla döndüğümüz değişkende eğer değer yoksa false oluyor
console.log(isActive)
let surname="Raziye" 
isActive=Boolean(surname)// booleanla döndüğümüz değişkende eğer değer varsa bu sefer de true dönecektir.
console.log(isActive)
// true =1 false=0 
console.log(Boolean(1n))
console.log(Boolean(-0))// 0 ve -0 değer olmadığı için bize false döner 
console.log(Boolean("0"))// 0 burda bir string ifade döndüğü için bize true dönüyor 
console.log(Boolean(0)) 
console.log(Boolean(Infinity));// bu değeride true dönüyor
console.log(Boolean(Symbol()))
//-----
var x=10/'a'
console.log(x) // dönen değer NaN 
console.log(Boolean(x))

var y =""||-2||'javascript';// ??
console.log(y)// sonuç -2 çıktı ama nasıl 
console.log(Boolean(y))

var z={2:'js'}
console.log(z)// dönen değer 2 :"js"
console.log(Boolean(z))

var t =""&&-2&&'js' 
console.log(t)// salakça değer çıkmadan döndü :/
console.log(Boolean(t))// değer dönmediği için false değer döndü boolean

var a=false || 0
console.log(a)// bize çıktı gelen değer  0 dır false zaten 0, 0 yada 0 dönen değerde false oluyor.
console.log(Boolean(a))// dönen boolean değeri false çıkacaktır. 


