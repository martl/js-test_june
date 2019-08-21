// 1 aufgabe 
let array = [10, 11, 12,13, 14,15, 16, 200, 400, 500];
let filter = array.filter(items => items > 10);
console.log(filter);

//2 aufgabe
class FbW14d {
    constructor(lehrer, type, duration, anzahlStudenten) {
    this.lehrer = lehrer;
    this.type = type;
    this.duration = duration;
    this.anzahlStudenten = anzahlStudenten;
    }
    
    space() {
    let meters = this.anzahlStudenten * 22;
    return `Der Raum soll ${meters} Quadratmeter groß sein`;
    }
    
    }
    FbW14d.prototype.details = function () {
    return `Das ist ein ${this.duration} ${this.type}, unterrichtet von ${this.lehrer}. Es gibt ${this.anzahlStudenten} Studenten in diesem Kurs. Der Raum ist ${this.space()} Quadratmeter groß.`
    }

//3 aufgabe       
let events = [

{ weekDay: 'Monday', turnout: 20 },
{ weekDay: 'Tuesday', turnout: 23 },
{ weekDay: 'Wednesday', turnout: 61 },
{ weekDay: 'Thursday', turnout: 19 },
{ weekDay: 'Friday', turnout: 30 },
]

let sorted = events.sort((a, b) => {
return b.turnout - a.turnout;
});
console.table(sorted);

//4 Aufgabe
let arrayNumbers = [1, 2, 3, 4];
let mapped = arrayNumbers.map(x => Math.pow(x, 2));
console.log(mapped);
let filtered = mapped.filter(element => element % 2 !== 0);
console.log(filtered);

//5 Aufgabe Weltmeisterschaft

function TageZahl(dateOne, dateTwo) {
    const oneDay = 86400000;
    let dateOneMil = dateOne.getTime();
    let dateTwoMil = dateTwo.getTime();
    const difference = dateTwoMil - dateOneMil;
    return `${Math.round(difference / oneDay)} Tage seit Deutschland die Fußballweltmeisterschaft gewonnen hat`
}
​
let now = new Date();
let winDate = new Date(2014, 06, 13);
console.log(TageZahl(winDate, now));
​
​//6 Aufgabe Arbeitsstunden

const hourTracking = [
   { day: 'Monday', start: 8, end: 17 },
   { day: 'Tuesday', start: 9, end: 15 },
   { day: 'Wednesday', start: 10, end: 18 },
   { day: 'Thursday', start: 7, end: 14 },
   { day: 'Friday', start: 6, end: 12 },
];
​
const Stunden = hourTracking.reduce((insgesamt, hourTracking) => {
       return insgesamt += (hourTracking.end - hourTracking.start);
}, 0);
​
console.log(Stunden);

//7 Aufgabe Callback


//8 Aufgabe 2D Array
let board = [[1, 2, 3],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]];
​
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
    }
}

​