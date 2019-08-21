// Checke, ob Werte innerhalb eines Arrays größer als 10 sind. 
// Gib Werte, die größer als 10 sind in einem Array zurück.

arr1 = [4,6,8,12,20,14,5,9,10];


// const overTen = 

// Kreire eine Blaupause für einen Kurs beim DCI, z.B. FbW14d - nutzt die "class" Syntax von Javascript.
// * Die Klasse soll beinhalten, ob der Kurs ein Jahreskurs oder ein Orientierungskurs ist.
// * Die Klasse soll beinhalten, wer ihr Lehrer ist. 
// * Die Klasse soll beinhalten, ob es ein Web Development Kurs oder ein Online Marketing Kurs ist. 
// * Die Klasse soll die Anzahl der Studenten beinhalten. 
// * Die Klasse soll eine Methode haben, die die Größe des Klassenraums aufgrund der Anzahl der Studenten berechnet. 1 Student =  22m². 
// * Füge eine Methode als "prototype" hinzu, die alle Details eines Kurse ausgibt, z.B.
//
// "Das ist ein Jahreskurs Web Development Kurs, unterrichtet von Jean Smith. 
//  Es gibt 10 Studenten in diesem Kurs. Der Raum ist 220 Quadratmeter groß."

// const Course = function (type,category,teacher, studentsNumber) {
//     this.type = type
//     this.category = category
//     this.teacher = teacher
//     this.studentsNumber = studentsNumber
//     this.output = produceOutput(this.)
// }

// Jedes Ereignis hat einen anderen turnout (Ausstoß). 
// Sortiere das Array von Objekten basierend auf den Tag, der am meisten Ausstoß hatte. 
// Höchster Ausstoß -> niedrigster Ausstoß.

// let events = [
//     { weekDay: 'Monday', turnout: 20 },
//     { weekDay: 'Tuesday', turnout: 23 },
//     { weekDay: 'Wednesday', turnout: 61 },
//     { weekDay: 'Thursday', turnout: 19 },
//     { weekDay: 'Friday', turnout: 30 },
// ]

// const sort = [];

// Kreiere eine Funktion (oder eine Serie von Funktionen) die ein Array von Zahlen bekommt, 
// diese quadriert, alle gerade Zahlen entfernt und als Array die ungeraden Zahlen zurückgibt.

const arr2 = [1, 2, 3, 4, 5]

const calcArr = () => {
    
    const quadrat = (e) => e ** 2
    
    
    const arrQ = arr2.map(quadrat)

    if(arrQ%2===!0) {
        
    }
    
}

calcArr(arr2);


