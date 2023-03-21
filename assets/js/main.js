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

//definire un array che contenga i numeri generati in un secondo moment
const numberDesk = [];

//definire un array che contenga i  numeri scelti dall'utente
const userNumberArray = [];

//creare una funzione che generi 5 numeri casuali
function generateNumber(maxNumb) {

    for (let i = 0; i < 5; i++) {
        let numberGenerated = Math.floor(Math.random() * maxNumb) + 1;

        //pushare i numeri nell'array
        numberDesk.push(numberGenerated);
    }
}

//scegliere il range massimo del numero casuale
generateNumber(100);


function loopArray(nameArray) {
    for (let i = 0; i < nameArray.length; i++) {
        let numberToFind = numberDesk[i];
        console.log(numberToFind);
    }

}

loopArray(numberDesk);


//selezionare l'elemento in DOM dove stampare i numeri generati
const h1Element = document.querySelector('.number_ghost');

//stampare nell'elemento selezionato i numeri generati
h1Element.insertAdjacentHTML('afterbegin', numberDesk);


setTimeout(removeElement, 30000);
function removeElement() {
    h1Element.innerHTML = ``;
}

//selezionare il button nella DOM e salvarlo in una variabile
const buttonEl = document.getElementById('submit');

//creare un addEventListener per recuperare i valori degli input
buttonEl.addEventListener('click', function(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const number3 = document.getElementById('number3').value;
    const number4 = document.getElementById('number4').value;
    const number5 = document.getElementById('number5').value;

    //passo i numeri scelti dall'utente all'array di riferimento
    userNumberArray.push(number1, number2, number3, number4, number5);

    console.log(userNumberArray);

    //verificare quanti di questi numeri sono stati individuati
  
    //indicare quanti e quali numeri sono stati individuati
})
