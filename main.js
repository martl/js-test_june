//1 

let array = [13, 122, 18, 23, 213, 40, 58, 5676];
let filter = array.filter(items => items > 10);
console.log(filter);



//3
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
    },]
let sortedEvents = events.sort((a, b) => {
return b.turnout - a.turnout;
})
console.table(sortedEvents)

//4
let arrayNumbers = [1, 2, 3, 4];
let mapped = arrayNumbers.map(x => Math.pow(x, 2));
console.log(mapped);
let filteredArray = mapped.filter(element => element % 2 !== 0);
console.log(filteredArray)


// 6
const ArbeitStunden = [{
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
const stunden = ArbeitStunden.reduce((total, ArbeitStunden) => {
    return total += (ArbeitStunden.end - ArbeitStunden.start);
}, 0);
console.log(stunden);


// 8
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
}
 
 