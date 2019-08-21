// // Erste Aufgabe

 const num = [2, 12, 9, 16, 20, 18];
 let newArray = num.filter((el)=> el> 10
 );
 console.log(newArray)


// // Zweite Aufgabe:

 const fbw14 = [{
     name : "fbw14",
     students : 9,
     kurs : "WebDeveloper",
     lehrer1: "Jan",
     lehrer2: "Martina",
     laenge: "Jahreskurs"

 }];



// //3 Aufgabe
 let events = [
     { weekDay: 'Monday', turnout: 20 },
     { weekDay: 'Tuesday', turnout: 23 },
     { weekDay: 'Wednesday', turnout: 61 },
     { weekDay: 'Thursday', turnout: 19 },
     { weekDay: 'Friday', turnout: 30 },
 ];
 events.sort();
 let newEvent = events.map((data, index)=>{
     return {
         ...data,index
     }
 })
 console.log(events)

 events.forEach((data,index)=>{
     events[index].turnout=data.turnout
 })
 console.log(events)

  4 Aufgabe

 let Array2 = [2, 6,7,3,9,5,11,8,22,31,]

 function ()=>{
     ret= [];

     for (var i = 0, len = Array2.length; i < len; i++) {
         ret.push(Array2[i] * Array2[i]);
     }

     return ret;   }  
 }
 console.log(Array2)

 Array2.sort();
 console.log(Array2.sort());

//Aufgabe 5 

let arr = [
    {
        wm: 06/13/2014

    }
]
arr.forEach((arr)=>{
    arr.Tag = Math.floor((new Date()-new Date(arr.wm).getTime()) / 3.15576e+10);
    console.log(arr.sort((x,y)=>{
        return x.Tag - y.Tag
    }))
})

