let userName="Emre"
//const DOMAIN="kodluyoruz.org"
const DOMAIN="kodluyoruz.org"

let email=userName+"@"+DOMAIN

let info=
`
Merhaba ${userName} sitemize hoş geldiniz..
E-main adresiniz ${email}'dir.
Saat ${new Date().getHours()}.
Mail adresinizin uzunluğu ${email.length}.
İsminizin kısaltması ${userName[0]}. 
Toplam borcunuz ${(2+3)*13}TL.

`
console.log(info)