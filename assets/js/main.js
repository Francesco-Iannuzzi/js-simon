/*

Consegna:
Visualizzare in pagina 5 numeri casuali.

Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.

Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.

*/

/*

Tools:
- const / let
- array
- prompt
- alert
- for / while
- Math (random / ceil / floor)
- addEventListener
- function
- timing function
- setInterval / clearInterval
- setTimeout / clearTimeout

*/

//definisco una variabile per il conteggio dei numeri individuati
let identifiedNumbers = 0;

//creare una funzione che generi 5 numeri casuali
function generateNumber() {

    //definire un array che contenga i numeri generati
    const numberDesk = []
    while (numberDesk.length < 5) {
        const numberGenerated = Math.floor(Math.random() * 100) + 1;
        if (!numberDesk.includes(numberGenerated)) {
            //pushare i numeri nell'array
            numberDesk.push(numberGenerated);
        }
    }
    return numberDesk

}

//salvare l'array con in numeri generati con la funzione in un array nel global scope
const numberDesk = generateNumber()


function loopArray(nameArray) {
    for (let i = 0; i < nameArray.length; i++) {
        let numberToFind = numberDesk[i];
        console.log(numberToFind);
    }

}

loopArray(numberDesk);

//selezionare l'elemento in DOM dove stampare i numeri generati
const h1Element = document.querySelector('.number_ghost');

//selezionare l'elemento in DOM dove stampare i numeri scelti dall'utente
const h2Element = document.querySelector('.number_choice');

//stampare nell'elemento selezionato i numeri generati
h1Element.insertAdjacentHTML('afterbegin', numberDesk);


setTimeout(removeElement, 30000);
function removeElement() {
    h1Element.innerHTML = ``;

}

//imposto un nuovo setTimeout così da far comparire i prompt per inserire i numeri dopo scomparsi quelli a schermo
setTimeout(askNumber, 30100);
function askNumber() {

    //definire un array che contenga i  numeri scelti dall'utente
    const userNumberArray = [];
    //chiedo di inserire un numero finché non si scelgono 5 numeri diversi
    while (userNumberArray.length < 5) {
        let userNumber = Number(prompt('Inserisci un numero'));
        //userNumberArray.push(userNumber);

        if (!userNumberArray.includes(userNumber)) {
            userNumberArray.push(userNumber);
            //se il numero indicato è uguale ad uno dei numeri generati lo logghiamo in console e lo indichiamo all'utente
            if (numberDesk.includes(userNumber)) {
                console.log('Ha individuato il numero:', userNumber);

                //aumento il conteggio dei numeri individuati
                identifiedNumbers++;


                //altrimenti diciamo all'utente che il numero inserito non era presente
            } else {
                console.log('Mi dispiace il numero inserito non era presente');
            }
        } else {
            alert('Devi inserire un numero differente da quelli precedentemente inseriti')
        }


        //mostro il conteggio dei numeri individuati in schermata
        h2Element.innerHTML = `Hai inviduato: ${identifiedNumbers} numeri`;

    }

}