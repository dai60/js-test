"use strict";

/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

const usdEurExchangeRate = 0.95;

function eurosToDollars(euros) {
    return Math.round(euros / usdEurExchangeRate * 100) / 100;
}

const euros = Math.floor(Math.random() * 1000) + 1;
console.log("1");
console.log(`${euros} EUR = ${eurosToDollars(euros)} USD`);
console.log();

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function dollarsToEuros(dollars) {
    return Math.round(dollars * 100 * usdEurExchangeRate) / 100;
}

const dollars = Math.floor(Math.random() * 1000) + 1;
console.log("2");
console.log(`${dollars} USD = ${dollarsToEuros(dollars)} EUR`);
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

const weight = 80;
const height = 1.8;
const bmi = calculateBMI(weight, height);

console.log("3");
console.log(`svoris = ${weight}kg, ugis = ${height}m`);
console.log(`BMI = ${bmi}`);
if (bmi > 25) {
    console.log("virssvoris");
}
else if (bmi >= 18.5) {
    console.log("normalu");
}
else {
    console.log("per mazas svoris");
}
console.log();

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

function logAge(years) {
    const days = years * 365.25;
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    console.log(`${years} metai yra ${days} dienomis / ${hours} valandomis / ${minutes} minutemis / ${seconds} sekundemis`);
}

console.log("4");
logAge(1);
console.log();

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
