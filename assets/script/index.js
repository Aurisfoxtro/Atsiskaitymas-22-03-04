const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)

document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    document.querySelectorAll('h2').forEach(e=>e.innerText = rand(1,6))
})

// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

let pirmoH2Txt = document.querySelector('h2').innerText;
let antroH2Txt = document.querySelector('h2 + h2').innerText;

if ((pirmoH2Txt == antroH2Txt) && (pirmoH2Txt != '') && (antroH2Txt != '')){
    document.querySelectorAll('h2').forEach(e=>e.style.color = 'red');
}

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)

let Array = [];

// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)

document.querySelector('h3 + button').addEventListener('click', ()=>{
    let number = rand(1,10);
    Array.push(number);
    console.log(Array);
})

// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

let sum = 0;
for(let i = 0; i < Array.length; i++){
    sum += Array[i];
}

document.querySelector('h3').innerText = sum;

// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)

// a. JS pagalba perskaitykite masyvą africa. (4 taškai)

for(let i = 0; i < africa.length; i++){
    console.log(africa[i]);
}

// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)

for(let i = 0; i < africa.length; i++){
    const li = document.createElement('li');
    li.innerHTML = africa[i];
    document.querySelector('ul').appendChild(li);
}
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

for(let i = 0; i < africa.length; i++){
    if (africa[i] == ''){
    }else{
    const li = document.createElement('li');
    li.innerHTML = africa[i];
    document.querySelector('ul').appendChild(li);
    }
}

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)

// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)

let num1 = document.querySelector('input').innerHTML;
let num2 = document.querySelector('input + input').innerHTML;
let result = 0;

console.log(num1, num2);

document.getElementById('plus').addEventListener('click', ()=>{
    result = num1 + num2;
})
document.getElementById('minus').addEventListener('click', ()=>{
    result = num1 - num2;
})


// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.

document.querySelector('h5').innerText = result;

// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)

// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)

let string = '';

for(let i = 0; i < australia.length; i++){
    string += '<li>' + australia[i] + '</li>';
}

// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)

document.getElementsByTagName('ul')[1].innerHTML = string;

// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)

string = '';

for(let i = 0; i < australia.length; i++){
    if(australia[i] == 'Dingo'){
        string += '<li style="background:blue;">' + australia[i] + '</li>';
    }else{
        string += '<li>' + australia[i] + '</li>';
    }
}
document.getElementsByTagName('ul')[1].innerHTML = string;