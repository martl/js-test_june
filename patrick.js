console.log('Javascript Test 2');
console.log('');
console.log('Aufgabe 1)');

let array = [1, 3, 5, 6, 11, 14, 432442, 555, 4, 232, 765];
let filter = array.filter(zahlen => zahlen > 10);
console.log(filter);


console.log('');
console.log('Aufgabe 2)');

class Kurs {
    constructor(kursDauer, lehrer, kursArt, kursTeilnehmer) {
        this.kursDauer = kursDauer;
        this.lehrer = lehrer;
        this.kursArt = kursArt;
        this.kursTeilnehmer = kursTeilnehmer;
    }
    benoetigterPlatz() {
        let platz = this.kursTeilnehmer * 22;
        return `Der Kurs benötigt ein Klassenzimmer mit einer größe von ${platz}m².`;
    }
}

Kurs.prototype.details = function () {
    return `Das ist ein ${this.kursDauer} ${this.kursArt}, unterrichtet von ${this.lehrer}. Es gibt ${this.kursTeilnehmer} Studenten in diesem Kurs. Der Raum ist ${this.kursTeilnehmer*22} Quadratmeter groß.  `
}
let newKurs = new Kurs("Jahreskurs", "Jean Smith", "Web Development Kurs", 10);
console.log(newKurs.benoetigterPlatz());
console.log(newKurs.details());


console.log('');
console.log('Aufgabe 3)');

let events = [{
        weekDay: 'Monday',
        turnout: 20
    },
    {
        weekDay: 'Tuesday',
        turnout: 23
    },
    {
        weekDay: 'Wednesday',
        turnout: 61
    },
    {
        weekDay: 'Thursday',
        turnout: 19
    },
    {
        weekDay: 'Friday',
        turnout: 30
    },
];

let sortierteEvents = events.sort((a, b) => {
    return b.turnout - a.turnout;
});

console.log(sortierteEvents);


console.log('');
console.log('Aufgabe 4)');

let arrayZahlen = [1, 4, 6, 7];
let arrayHochZwei = arrayZahlen.map(zahl => Math.pow(zahl, 2));
console.log(arrayHochZwei);
let arrayUngerade = arrayHochZwei.filter(item => item % 2 !== 0);
console.log(arrayUngerade);


console.log('');
console.log('Aufgabe 5)');

let heute = new Date();
let datum = new Date(2014, 06, 13);
let differenz = (heute.getTime() - datum.getTime());
let einTag = 86400000;
let tage = Math.round(differenz / einTag);
console.log(datum);
console.log(`Seit dem WM Sieg, sind ${tage} vergangen`);


console.log('');
console.log('Aufgabe 6)');

const hourTracking = [{
        day: 'Monday',
        start: 8,
        end: 17
    },
    {
        day: 'Tuesday',
        start: 9,
        end: 15
    },
    {
        day: 'Wednesday',
        start: 10,
        end: 18
    },
    {
        day: 'Thursday',
        start: 7,
        end: 14
    },
    {
        day: 'Friday',
        start: 6,
        end: 12
    },
];

const arbeitsStunden = hourTracking.reduce((gesamt, stundenAnzahl) => {
    return gesamt += (stundenAnzahl.end - stundenAnzahl.start);
}, 0);

console.log(`Die Person hat ${arbeitsStunden} Stunden in dieser Woche gearbeitet.`);


console.log('');
console.log('Aufgabe 7)');

function mapping(array, callback) {
    newarray = array.map(val => callback(val));
    return newarray
}
const powerOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val, 2));
console.log(powerOfTwo)


console.log('');
console.log('Aufgabe 8)');

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
        console.log(board[i][k]);
    }
};