/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  rettangolo = l1 * l2
  console.log("ES 1:", rettangolo)
}
area(3, 5)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  summ = n1 + n2
  if (n1 === n2) {
    summ = summ * 3
  }
  console.log("ES 2:", summ)
}
crazySum(2, 3)
crazySum(2, 2)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  if (n1 < 19) {
    diff = 19 - n1
  } else {
    diff = n1 - 19
    diff = diff * 3
  }
  console.log("ES 3:", diff)
}
crazyDiff(10)
crazyDiff(22)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (Number.isInteger(n)) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true
    }
  }
  return false
}
console.log("ES 4:", boundary(23))
console.log("ES 4:", boundary(88.23))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (stringa) {
  if (stringa.slice(0, 7) === "EPICODE") {
    console.log(stringa)
  }
  console.log("EPICODE", stringa)
}
epify("bhefjvh")
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
  if ((num > 0 && num % 3 === 0) || num % 7 === 0) {
    return true
  }
  return false
}
console.log(check3and7(-3))
console.log(check3and7(3))
console.log(check3and7(4))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (phrase) {
  let stringa = ""
  for (let i = phrase.length - 1; i >= 0; i--) {
    stringa += phrase[i]
  }
  return stringa
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}
console.log(upperFirst("ciao sono bilal"))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  let result = str.slice(1, -1)

  return result
}
console.log(cutString("ciao sono bilal"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let array = []
  for (let i = 0; i < n; i++) {
    const lancio = Math.ceil(Math.random(n) * 10)
    array.push(lancio)
  }
  return array
}
console.log(giveMeRandom(5))
