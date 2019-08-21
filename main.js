// #### 1. >10
// Checke, ob Werte innerhalb eines Arrays größer als 10 sind. Gib Werte, 
// die größer als 10 sind in einem Array zurück. **Benutze keine Schleife**

let array = [1,20,3,4,5,60,7,80,9];

let newArray = array.filter(value => {
    if(value > 10){
        return value;
    };
});
console.log(newArray);

// #### 2. Klassen Blaupause

class Kurs{
    constructor(yearOrient,teacher,devMark,studCount){
        this.yearORorient = yearOrient;
        this.teacher = teacher;
        this.devORmark = devMark;
        this.studCounter = studCount;
        this.room = studCount * 22;
    }

}

Kurs.prototype.details = function() {
    return `Das ist ein ${this.yearORorient}-Kurs für ${this.devORmark}. 
    Der Lehrer ist ${this.teacher}. Es gibt ${this.studCounter} Studenten.
    Der Raum ist ${this.room} m² gross.`;
}
let fbw14d = new Kurs('year','Jan','dev',7);
fbw14d.details();


console.log(fbw14d);
console.log(fbw14d.details());

// #### 3. Ereignisse  
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

let sortEvents = (a,b)=>{
    return a.turnout-b.turnout;
}

console.log(events.sort(sortEvents));

// 4. Gib ungerade Quadratzahlen zurück

let array2 = [1,2,3,4,5,6,7,8,9];

let squared = (array) =>{
    let sqArray = [];
    for(element of array){
        console.log(element);
        element = element*element;
        if(element%2) sqArray.push(element);
    }
    return sqArray;
}

console.log( squared(array2));

// 5. Weltmeisterschaft

let lastSieg = new Date('13. Juni 2014').getTime();

console.log(lastSieg);

let today = new Date().getTime();

console.log(today);

let timePassed = Math.floor((today - lastSieg)/(1000*60*60*24));
console.log(`Seit dem letzten Sieg sind ${timePassed} Tage vergangen.`);

// 6. Arbeitsstunden

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
  ];


let sumHours = (array) => {
    let sum = 0;
    for(e of array){
        sum += e.end-e.start;
    };
    return sum;
};

console.log(sumHours(hourTracking));

// 7. Callback

function mapping(array,funct){
    let newArray3 = [];
    for(e of array){
        newArray3.push(funct(e));
    }
    console.log(newArray3);
    return newArray3;
}

const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2));

console.log(powerOfTwo);

const rootOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,0.5))

console.log(rootOfTwo);

// 2D Array

let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
         [true, false]];

for (let i=0;i<board.length;i++){
    for(e of board[i]){
        console.log(e);
    }
}
         

