let firstNamee="Emre"
let lastNamee="GÜNER"
let emaill="emre.guner@live.com"
//string karakter sayısı (length)
console.log(firstNamee.length)
// ilk karakteri bulmak (index-0) ve büyük,küçük harf
console.log(`ilk harf ${firstNamee[0].toLowerCase()}`)
console.log(firstNamee.charAt(1).toLocaleUpperCase())
console.log(firstNamee.toUpperCase())
 firstNamee=firstNamee.toLowerCase()
 console.log(firstNamee)
 // string içinde aradığımız şeyi yeriyle beraber bulmak(search -dilimlemek,bölmek)
 console.log(emaill.search("@"))
 console.log(emaill.search("@")+1)
 emaill.search("olmayan")// -1 çıkar aranan yoksa
// belli bir yere kadar alma(slice)
 let domain =emaill.slice(emaill.search("@")+1)
 console.log("bu mail adresinin domain adresi",domain)
console.log(emaill.slice(1,5))
console.log(emaill.slice(0,5))
// bilgiyi değiştir (replace)
emaill=emaill.replace('live.com','hotmail.com')
console.log(emaill)
firstNamee=firstNamee.replace('mr','eee')
console.log(firstNamee)
// istediğim bilgi var mı ? (includes)
console.log(emaill.includes('area')) // false 
console.log(emaill.includes('@')) // true 
//istediğim bilgiyle başladı mı bitti mi ? (starsWidth endsWidth)
console.log(emaill.endsWith('.com'))
console.log(emaill.endsWith('con'))
// harfleri büyük ya da küçük yapma 
firstNamee="EMRE"
lastNamee="GÜNER"
console.log(`Benim Adım= ${firstNamee[0].toUpperCase()}${firstNamee.slice(1).toLowerCase()}
Soyadım= ${lastNamee[0].toLocaleUpperCase()}${lastNamee.slice(1).toLocaleLowerCase()}`)
console.log(firstNamee.slice(1,3))