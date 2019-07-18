# JavaScript Test: Fortgeschrittene Themen

## Beantworte die Fragen nach bestem Wissen und Gewissen! Versuche alle Fragen zu beantworten.

### Zeit: 2 Stunden

#### 1. >10
Checke, ob Werte innerhalb eines Arrays größer als 10 sind. Gib Werte, die größer als 10 sind in einem Array zurück. **Benutze keine Schleife** 

#### 2. Klassen Blaupause

Kreire eine Blaupause für einen Kurs beim DCI, z.B. FbW14d - nutzt die "class" Syntax von Javascript.
* Die Klasse soll beinhalten, ob der Kurs ein Jahreskurs oder ein Orientierungskurs ist.
* Die Klasse soll beinhalten, wer ihr Lehrer ist. 
* Die Klasse soll beinhalten, ob es ein Web Development Kurs oder ein Online Marketing Kurs ist. 
* Die Klasse soll die Anzahl der Studenten beinhalten. 
* Die Klasse soll eine Methode haben, die die Größe des Klassenraums aufgrund der Anzahl der Studenten berechnet. 1 Student =  22m². 
* Füge eine Methode als "prototype" hinzu, die alle Details eines Kurse ausgibt, z.B. "Das ist ein Jahreskurs Web Development Kurs, unterrichtet von Jean Smith. Es gibt 10 Studenten in diesem Kurs. Der Raum ist 220 Quadratmeter groß."

#### 3. Ereignisse  
Jedes Ereignis hat einen anderen turnout (Ausstoß). Sortiere das Array von Objekten basierend auf den Tag, der am meisten Ausstoß hatte. Höchster Ausstoß -> niedrigster Ausstoß.

```javascript
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]
```

#### 4. Gib ungerade Quadratzahlen zurück
**Benutze für diese Aufgabe eine Schleife.**
Kreiere eine Funktion (oder eine Serie von Funktionen) die ein Array von Zahlen bekommt, diese quadriert, alle gerade Zahlen entfernt und als Array die ungeraden Zahlen zurückgibt.

#### 5. Weltmeisterschaft
Wie lang ist es her, seit Deutschland die Fußballweltmeisterschaft gewonnen hat? Berechne die Anzahl der Tage seit dem letzten Sieg. Deutschland hat zuletzt am 13. Juni 2014 gewonnen.

#### 6. Arbeitsstunden
Berechne, wie viele Stunden (insgesamt) diese Person diese Woche gearbeitet hat. 
* Notiz: Start ist immer morgens, Ende ist immer abends. 

```javascript
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ];
```

#### 7. Callback 
**Teil 1**: Gegeben sei folgender Code unten, schreibe eine Funktion mit einem Callback. Die Funktion soll ein neues Array zurückgeben, das jedes Element hoch zwei ausrechnet. 

```javascript
function mapping(){
//insert code here
}
const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
```
Erwartetes Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

**Teil 2**: Erstelle eine andere Variable, rufe die "mapping" Funktion noch einmal auf, aber ändere jetzt die Callback Funktion so, dass sie ein Array der Wurzeln jedes Elements zurückgibt. 

#### 8. 2D Array
Gegeben ist das folgende 2D Array, gehe mit einer **Schleife** durch das Array um die Werte auszugeben.
```javascript
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]]
```


##### Viel Erfolg! :)

