const nav = document.getElementById('nav')

const ul = document.createElement('ul')
const li0= document.createElement('li')
const li1 = document.createElement('li')
const li2= document.createElement('li')
const li3= document.createElement('li')

ul.classList.add('nav')

const a0 = document.createElement('a')
a0.href = 'C:/Users/Betinho/Documents/PROJETOS/academiaHtml/WorkOutProject/index.html'
a0.innerHTML = 'Index'
const a1 = document.createElement('a')
a1.href = 'C:/Users/Betinho/Documents/PROJETOS/academiaHtml/WorkOutProject/views/benefits.html'
a1.innerHTML = 'Benefits'
const a2 = document.createElement('a')
const a3 = document.createElement('a')

nav.appendChild(ul)
ul.appendChild(li0)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
li0.appendChild(a0)
li1.appendChild(a1)
li2.appendChild(a2)
li3.appendChild(a3)

