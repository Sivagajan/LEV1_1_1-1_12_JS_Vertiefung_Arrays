console.log('first')

// LEV1_1_1
let adresse = ['Dorthausen 152', '41179', 'Mönchengladbach', 'Nordrhein-Westfalen']
let besteFreunde = ['Christian', 'Axel','Bernd']
let person = ['Sivagajan', 'Karunanathan', 'Siva', '33', 'Motorrad fahren', 'Heppenheim', 'Fullstack Web-Developer']
console.log(adresse)
console.log(besteFreunde)
console.log(person)

person = person.concat(adresse, besteFreunde)

console.log(person)

// LEV1_1_2

console.log(`This is the array length of person: ${person.length}`)
console.log(`This is the array length of adresse: ${adresse.length}`)
console.log(`This is the array length of besteFreund: ${besteFreunde.length}`)

// LEV1_2

const meineTrainer1 = ['Christian', 'Stefan', 'Steffen', 'Freddi', 'Ruben']

const meineTrainer2 = new Array('Christian', 'Stefan', 'Steffen', 'Freddi', 'Ruben');

const meineTrainer3 = new Array()
    meineTrainer3[0] = 'Christian'
    meineTrainer3[1] = 'Stefan'
    meineTrainer3[2] = 'Steffen'
    meineTrainer3[3] = 'Freddi'
    meineTrainer3[4] = 'Ruben'

console.log(meineTrainer1)
console.log(meineTrainer2)
console.log(meineTrainer3)

// LEV1_3

const numberArray = [5,6,7,8,9,10]

console.log(numberArray[4])
console.log(numberArray[0])
console.log(numberArray[5])

// LEV1_4

const meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.'
const meinText2 = 'Wie geht es dir heute?'
const meinText3 = 'Heute ist ein großer Tag für uns.'

console.log(meinText1.split()) // Speichert den ganzen text in ein Array Element
console.log(meinText2.split('')) // speichert jeden Buchstaben in eine Array Element
console.log(meinText3.split(' ')) // Speichert jedes Wort in ein Array Element da er nach jedem leerzeichen trennt
console.log(meinText2.split('e'))

// LEV1_5_1

const songs = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California']
songs.push("Sweet Child O'Mine", "Killing in the Name of", "Thunderstruck")

console.log(songs)

let totalSongs = songs
console.log(totalSongs)

const besteFussballerAllerZeiten = ['Pele', 'Zidane','Garrincha', 'di Stefano', 'Alberto']
besteFussballerAllerZeiten.push('Kahn', 'Casillas', 'Buffon')
console.log(besteFussballerAllerZeiten)

totalSongs.push('durch den Monsun', 'Atemlos', 'irgendeinSchlager')
console.log(totalSongs)
besteFussballerAllerZeiten.push('Rinus Michels', 'Sir Alex Ferguson', 'Arigo Sacchi')
console.log(besteFussballerAllerZeiten)

// LEV1_5_2

const heroAndEnemy = [['Batman','The Joker'],['Professor X', 'Magneto'], ['Thor','Loki']]
console.log(heroAndEnemy)
heroAndEnemy.push(['Superman', 'Lex Luthor'], ['Wolverine', 'Sabretooth'], ['Ghost Rider', 'Mephisto'])
console.log(heroAndEnemy)

// LEV1_7

const deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten']
deutscheGerichte.unshift('Bremer Knipp', 'Pinkel mit Grünkohl', 'Linseneintopf', 'Kartoffelsalat', 'Himmel und Erde')

console.log(deutscheGerichte)

// LEV1_8

let nichtSoGut =[deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift() ]

console.log(nichtSoGut)


// LEV1_9

const zahlen = [23, 54, 75]
console.log(zahlen)
zahlen.push(1,2,3,4,5)
console.log(zahlen)
zahlen.unshift(5,4,3,2,1)
console.log(zahlen)
zahlen.pop()
zahlen.pop()
console.log(zahlen)
zahlen.shift()
zahlen.shift()
console.log(zahlen)

// Lev1_12

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
]

console.log(array)

let copyImage1 = array.slice(7,15)

console.log(copyImage1)

let copyImage2 = array.slice(6,12)
console.log(copyImage2)

