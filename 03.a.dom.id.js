let h2=document.getElementsByTagName('h2')
console.log(h2.title.innerHTML)// burda ki title içeriğine girdiğimiz yerin id adı

let title =document.getElementById('title')
title.innerHTML="Degisen Bilgi"// burda title idli yerin içeriğini Degisen Bilgi ile değişti
console.log(title.innerHTML)

let link=document.querySelector("ul#list>li>a")// tek bir tane eleman için yapabiliri bu işlemi hepsi için querySelectorall yapmalıyız
console.log(link)
link.innerHTML+="  degisti"
console.log(link.innerHTML)
console.log(link.style.color="red")

let link1=document.querySelector("list1")
console.log(list1)
console.log(list1.innerHTML)
list1.innerHTML+=" değiştirildi"
list1.style.color="aqua"
list1.style.size="1px"
