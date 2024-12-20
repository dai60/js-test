"use strict";

/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

const usdEurExchangeRate = 0.95;

function eurosToDollars(euros, usdEurExchangeRate) {
    return Math.round(euros / usdEurExchangeRate * 100) / 100;
}

const euros = Math.floor(Math.random() * 1000) + 1;
console.log("1");
console.log(`${euros} EUR = ${eurosToDollars(euros, usdEurExchangeRate)} USD`);
console.log();

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function dollarsToEuros(dollars, usdEurExchangeRate) {
    return Math.round(dollars * 100 * usdEurExchangeRate) / 100;
}

const dollars = Math.floor(Math.random() * 1000) + 1;
console.log("2");
console.log(`${dollars} USD = ${dollarsToEuros(dollars, usdEurExchangeRate)} EUR`);
console.log();

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris.
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu.
Pvz. svoris = 80kg, ūgis = 1.8 m.
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

function bmiInfo(bmi) {
    if (bmi > 25) {
        return "virssvoris";
    }
    else if (bmi >= 18.5) {
        return "normalu";
    }
    else {
        return "per mazas svoris";
    }
}

const weight = 80;
const height = 1.8;
const bmi = calculateBMI(weight, height);

console.log("3");
console.log(`svoris = ${weight}kg, ugis = ${height}m`);
console.log(`BMI = ${bmi}`);
console.log(bmiInfo());
console.log();

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

function calculateAge(years) {
    const days = years * 365.25;
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    return { years, days, hours, minutes, seconds };
}

const age = calculateAge(1);

console.log("4");
console.log(`${age.years} metai yra ${age.days} dienomis / ${age.hours} valandomis / ${age.minutes} minutemis / ${age.seconds} sekundemis`);
console.log();

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

const f = 77;
console.log("5");
console.log(`${f}F = ${fahrenheitToCelsius(f)}C = ${celsiusToFahrenheit(fahrenheitToCelsius(f))}F`);
console.log();

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

function numberLine() {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }
    return numbers.join("-");
}

console.log("6");
console.log(numberLine());
console.log();

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

function triangle() {
    let stars = "";
    const triangle = [];
    for (let i = 0; i < 5; i++) {
        stars += "*";
        triangle.push(stars);
    }
    return triangle.join("\n");
}

console.log("7");
console.log(triangle());
console.log();

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

function daysUntilChristmas() {
    const date = new Date();
    if (date.getMonth() === 11 && date.getDate() === 25) {
        return 0;
    }

    const xmas = new Date(date.getFullYear(), 11, 25);
    if (date > xmas) {
        xmas.setFullYear(xmas.getFullYear() + 1);
    }

    const day = 24 * 60 * 60 * 1000;
    return Math.ceil((xmas - date) / day);
}

console.log("8");
console.log(`iki Kaledu liko ${daysUntilChristmas()} dienu`);
console.log();

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

function join(array, separator) {
    let string = "";
    if (array.length === 0) {
        return string;
    }

    for (let i = 0; i < array.length - 1; i++) {
        string += array[i];
        string += separator;
    }
    string += array[array.length - 1];
    return string;
}

const names = ["Tomas", "Dainius", "Paulius", "Jonas"];

console.log("9");
console.log(join(names, ","));
console.log(join(names, "+"));
console.log();

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

function generateUppercase() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}
function generateLowercase() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}
function generateDigit() {
    return Math.floor(Math.random() * 10).toString();
}
function generateSymbol() {
    const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    let password = [generateUppercase(), generateLowercase(), generateDigit(), generateSymbol()];

    for (let i = password.length; i < 12; i++) {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                password.push(generateUppercase());
                break;
            case 1:
                password.push(generateLowercase());
                break;
            case 2:
                password.push(generateDigit());
                break;
            case 3:
                password.push(generateSymbol());
                break;
        }
    }

    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join("");
}

console.log("10");
console.log(generatePassword());
console.log();
