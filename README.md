# JavaScript Test: Fortgeschrittene Themen

## Beantworte die Fragen nach bestem Wissen und Gewissen! Versuche alle Fragen zu beantworten.

### Zeit: 2 Stunden

#### 1. >10
Checke, ob Werte innerhalb eines Arrays größer als 10 sind. Gib Werte, die größer als 10 sind in einem Array zurück. **Benutze keine Schleife** 

#### 2. Validierung 
Du erfindest eine neue Art, einen PIN Code zu validieren. Schreibe eine einfache Funktion namens validatePin, die true zurückgibt (für einen validen PIN Code) oder false (für einen invaliden PIN Code).

Das sind die Regeln für einen validen PIN: 

* Der PIN Code darf nur aus Zahlen bestehen
* Der PIN Code muss vierstellig sein
* Der PIN Code muss mindestens zwei verschiedene Ziffern beinhalten
* Die letzte Zahl des PIN Codes muss gerade sein
* Die Summe des PIN Codes muss mindestens 5 sein


-Beispiele: 
-Die folgenden PIN Codes sind zulässig:
* 1112
* 1994

-Die folgenden PIN Codes sind nicht zulässig:
* 1c24 // ist keine Zahl
* 12344 // fünfstelliger PIN Code
* 1235 // Letzte Ziffer ist ungerade
* 1110 // Die Summe ist kleiner als 5

#### 3. Klassen Blaupause

Kreire eine Blaupause für einen Kurs beim DCI, z.B. FbW14d - nutzt die "class" Syntax von Javascript.
* Die Klasse soll beinhalten, ob der Kurs ein Jahreskurs oder ein Orientierungskurs ist.
* Die Klasse soll beinhalten, wer ihr Lehrer ist. 
* Die Klasse soll beinhalten, ob es ein Web Development Kurs oder ein Online Marketing Kurs ist. 
* Die Klasse soll die Anzahl der Studenten beinhalten. 
* Die Klasse soll eine Methode haben, die die Größe des Klassenraums aufgrund der Anzahl der Studenten berechnet. 1 Student =  22m². 
* Füge eine Methode als "prototype" hinzu, die alle Details eines Kurse ausgibt, z.B. "Das ist ein Jahreskurs Web Development Kurs, unterrichtet von Jean Smith. Es gibt 10 Studenten in diesem Kurs. Der Raum ist 220 Quadratmeter groß."

#### 4. Ereignisse  
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

#### 5. Gib ungerade Quadratzahlen zurück
**Benutze für diese Aufgabe eine Schleife.**
Kreiere eine Funktion (oder eine Serie von Funktionen) die ein Array von Zahlen bekommt, diese quadriert, alle gerade Zahlen entfernt und als Array die ungeraden Zahlen zurückgibt.

#### 6. 10.000  
Baue ein (kleines) Spiel!
* Jeder Spieler hat 6 Würfel. (Jeder Würfel hat die Möglichkeiten, bei 1-6 stehen zu bleiben).
* Jeder Spieler würfelt all 6 Würfel jedes Mal, wenn er dran ist und das Ergebnis wird zu seinem Punktestand addiert. 
* Der erste Spieler, der 10.000 Punkte erreicht, gewinnt!

* Beispiel vom erwarteten Output: "Spieler 1: 9984, Spieler 2: 10.002 - Spieler 2 gewinnt!"

#### 7. Weltmeisterschaft
Wie lang ist es her, seit Deutschland die Fußballweltmeisterschaft gewonnen hat? Berechne die Anzahl der Tage seit dem letzten Sieg. Deutschland hat zuletzt am 13. Juni 2014 gewonnen.

#### 8. Arbeitsstunden
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

#### 9. Callback 
**Teil 1**: Gegeben sei folgender Code unten, schreibe eine Funktion mit einem Callback. Die Funktion soll ein neues Array zurückgeben, das jedes Element hoch zwei ausrechnet. 

```javascript
function mapping(){
//insert code here
}
const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
```
Erwartetes Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

**Teil 2**: Erstelle eine andere Variable, rufe die "mapping" Funktion noch einmal auf, aber ändere jetzt die Callback Funktion so, dass sie ein Array der Wurzeln jedes Elements zurückgibt. 

#### 10. 2D Array
Gegeben ist das folgende 2D Array, gehe mit einer **Schleife** durch das Array um die Werte auszugeben.
```javascript
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]]
```


##### Viel Erfolg! :)

