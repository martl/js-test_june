console.log(`holger js-test_june`);

// #### 1. >10
// Checke, ob Werte innerhalb eines Arrays größer als 10 sind. Gib Werte, die größer als 10 sind in einem Array zurück. **Benutze keine Schleife** 


let arrayAllNumbers = [1, 500, 25, 7, 3, -15, 22];

let arrayGreaterTen = [...arrayAllNumbers]; // Kopie des urspünglichen Arrays, damit dieser erhalten bleibt
arrayGreaterTen = arrayGreaterTen.filter(value => (value > 10));

console.log(arrayAllNumbers);
console.log(arrayGreaterTen);

// #### 2. Klassen Blaupause

// Kreire eine Blaupause für einen Kurs beim DCI, z.B. FbW14d - nutzt die "class" Syntax von Javascript.
// * Die Klasse soll beinhalten, ob der Kurs ein Jahreskurs oder ein Orientierungskurs ist.
// * Die Klasse soll beinhalten, wer ihr Lehrer ist. 
// * Die Klasse soll beinhalten, ob es ein Web Development Kurs oder ein Online Marketing Kurs ist. 
// * Die Klasse soll die Anzahl der Studenten beinhalten. 
// * Die Klasse soll eine Methode haben, die die Größe des Klassenraums aufgrund der Anzahl der Studenten berechnet. 1 Student =  22m². 
// * Füge eine Methode als "prototype" hinzu, die alle Details eines Kurse ausgibt, z.B. "Das ist ein Jahreskurs Web Development Kurs, unterrichtet von Jean Smith. Es gibt 10 Studenten in diesem Kurs. Der Raum ist 220 Quadratmeter groß."

class KlasseAtDCI {
    constructor(kursDauer, lehrer, kursTyp, anzahlTeilnehmer) {
        this.kursDauer = kursDauer;
        this.lehrer = lehrer;
        this.kursTyp = kursTyp;
        this.anzahlTeilnehmer = anzahlTeilnehmer;
    }
    quadratmeterberechnung() {
        this.klassenraumgroesse = this.anzahlTeilnehmer * 22;
    }
}

let fbw14d = new KlasseAtDCI("Jahreskurs", "Jan und Martina", "Web-Development-Kurs", 9);

fbw14d.quadratmeterberechnung();

KlasseAtDCI.prototype.detailAusgabe = function () {
    console.log(`Das ist ein ${this.kursDauer} ${this.kursTyp}, unterrichtet von ${this.lehrer}. Es gibt ${this.anzahlTeilnehmer} Studenten in diesem Kurs. Der Raum ist ${this.klassenraumgroesse} groß.`)
}
console.log(fbw14d);
fbw14d.detailAusgabe();

// #### 3. Ereignisse  
// Jedes Ereignis hat einen anderen turnout (Ausstoß). Sortiere das Array von Objekten basierend auf den Tag, der am meisten Ausstoß hatte. Höchster Ausstoß -> niedrigster Ausstoß.


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
    }
]

events.sort((a, b) => b.turnout - a.turnout)
console.log(events);




// #### 4. Gib ungerade Quadratzahlen zurück
// **Benutze für diese Aufgabe eine Schleife.**
// Kreiere eine Funktion (oder eine Serie von Funktionen) die ein Array von Zahlen bekommt, diese quadriert, alle gerade Zahlen entfernt und als Array die ungeraden Zahlen zurückgibt.


const functionTask4 = (array) => {
    newArrayForTask4 = array.map(value => (Math.pow(value, 2)));
    newArrayForTask4 = newArrayForTask4.filter(value => !(value % 2));
    return newArrayForTask4;
}

console.log(functionTask4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// #### 5. Weltmeisterschaft
// Wie lang ist es her, seit Deutschland die Fußballweltmeisterschaft gewonnen hat? Berechne die Anzahl der Tage seit dem letzten Sieg. Deutschland hat zuletzt am 13. Juni 2014 gewonnen.


const functionTask5 = (goneDate) => {

    let oldTime = new Date(goneDate).getTime();
    let currentTime = new Date().getTime();
    return Math.floor((currentTime - oldTime) / (1000 * 60 * 60 * 24));
}

console.log(functionTask5("06/13/2014") + " Tage sind seitdem vergangen.");


// #### 6. Arbeitsstunden
// Berechne, wie viele Stunden (insgesamt) diese Person diese Woche gearbeitet hat. 
// * Notiz: Start ist immer morgens, Ende ist immer abends. 


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
const functionTask6 = (array) => {
    let workinghours = 0;
    for (elem of array) {
        workinghours += (elem.end - elem.start);
    }
    return workinghours;
}

console.log(functionTask6(hourTracking));

// #### 7. Callback 
// **Teil 1**: Gegeben sei folgender Code unten, schreibe eine Funktion mit einem Callback. Die Funktion soll ein neues Array zurückgeben, das jedes Element hoch zwei ausrechnet. 



function mapping(array, callback) {
    newArrayforTask7 = array.map(value => callback(value))
    return `${array} -> ${newArrayforTask7}`
}
const powerOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val, 2));
console.log(powerOfTwo);

// Erwartetes Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

// **Teil 2**: Erstelle eine andere Variable, rufe die "mapping" Funktion noch einmal auf, aber ändere jetzt die Callback Funktion so, dass sie ein Array der Wurzeln jedes Elements zurückgibt. 

const rootOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val, 1 / 2));
console.log(rootOfTwo);

// #### 8. 2D Array
// Gegeben ist das folgende 2D Array, gehe mit einer **Schleife** durch das Array um die Werte auszugeben.

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
]
const functionTask8 = (array) => {
    for (elemA of array) {
        console.log(elemA) // gibt alle Items des äußeren Arrays aus
    }

    for (elemA of array) {
        for (elemB of elemA) {
            console.log(elemB) // gibt alle Items der inneren Arrays aus
        }
    }
}

functionTask8(board);

// ##### Viel Erfolg! :)