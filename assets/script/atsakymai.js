const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
//DONE

// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)

const $1 = document.querySelectorAll.bind(document)
const $2 = document.querySelector.bind(document)

let pirmas = document.getElementsByTagName('h2')[0]
let antras = document.getElementsByTagName('h2')[1]

function sukurti() {
    pirmas.innerText = rand(1,6);
    antras.innerText = rand(1,6);
    if(pirmas.innerText == antras.innerText) {
        pirmas.style.color = 'red';
        antras.style.color = 'red'
    }else {
        pirmas.style.color = 'black'
        antras.style.color = 'black'
    }
}

document.getElementById('uzdavinys1').addEventListener('click', sukurti)

// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

//done

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)

let masyvas =[];
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)

// let h3tagas = document.getElementsByTagName('h3').innerHTML =

document.getElementsByTagName('button')[1].addEventListener('click', ()=>{
    masyvas.push(rand(1,10))
    document.getElementsByTagName('h3')[0].innerText = skaiciuojam()
})
console.log(masyvas)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

function skaiciuojam() {
    let suma= 0
    for(let i=0;i<masyvas.length;i++) {
        suma += masyvas[i]
    }
    return suma
}



// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
//done
// a. JS pagalba perskaitykite masyvą africa. (4 taškai)
africa.forEach(e=>console.log(e))

// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)



for(let i=0; i< africa.length; i++) {
    let tvarkyta = africa[i];
    let li= document.createElement('li')
    li.innerText = tvarkyta;
    document.getElementsByTagName('ul')[0].appendChild(li)
}
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
for(let i=0; i< africa.length; i++) {
    africa.toString()
    let tvarkyta = africa[i];
    if(tvarkyta != '') {
    let li= document.createElement('li')
    li.innerText = tvarkyta;
    document.getElementsByTagName('ul')[0].appendChild(li)
}}

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)\
//done
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)

// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.

let sk1 = document.getElementsByTagName("input")[0].value
let sk2 = document.getElementsByTagName('input')[1].value

document.getElementsByTagName('button')[2].addEventListener('click', ()=> {
    let sum= parseInt(document.getElementsByTagName("input")[0].value) + parseInt(document.getElementsByTagName('input')[1].value)
    console.log(sum)
    document.getElementsByTagName('h5')[0].innerText = sum
} 
)

document.getElementsByTagName('button')[3].addEventListener('click', ()=> {
    let sum= parseInt(document.getElementsByTagName("input")[0].value) - parseInt(document.getElementsByTagName('input')[1].value)
    document.getElementsByTagName('h5')[0].innerText = sum
} 
)

// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
//done
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)

australia.forEach(e => console.log(e))
let naujaAustralija = ''

for(let i=0; i<australia.length; i++) {
    if(australia[i] == 'Dingo') {
        naujaAustralija += `<li style="background-color: lightblue;">${australia[i]}</li> `    
    } else {
    naujaAustralija += `<li>${australia[i]}</li> `
    }
}
console.log(naujaAustralija)

 
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)

document.getElementsByTagName('ul')[1].innerHTML = naujaAustralija
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
//done

let Current= new Date()
let Month = Current.getMonth();
let Day = Current.getDate()
let CurrentDate= `${Month},${Day}`
let Zilvesbd= "2,8";



if(CurrentDate == Zilvesbd){
alert("Happy Birthday my beloved bald fuck, wish you all the best and to KEEP PUSHING FORWARD. Love you")
} else {
alert("it's not your bd'ay, what do you want from me?")
}