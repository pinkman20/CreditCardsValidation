// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Validation function check 

const validateCred=(card)=> {
  let cardInverse = card.slice().reverse() // copying array and reversing it for easier use of for function
  for (let i = 0; i < cardInverse.length;i++) {
    if ( i % 2 !=0) { //separating array to even numbers according to luhn algorithm
      //console.log(cardInverse[i])
      cardInverse[i] = cardInverse[i] * 2 
     // console.log(cardInverse[i])
      if (cardInverse[i] >9) { // if the doubled value is greater than 9 reduce the value by 9
        cardInverse[i] = cardInverse[i] - 9
        //console.log(cardInverse[i])
      }
    }
  }

  // sum all the numbers in array and check modulo of number 10, if modulo is 0 then credit card is valid
  let sum = cardInverse.reduce((a,b)=> a+b,0)
  if (sum %10 === 0) {
    return true
  } else {
    return false
  }
}

console.log(validateCred(valid1))


// find invalid cards and push them to invalidCard array
const findInvalidCards = (cards) =>{
  let invalidCard = [];
  for (let j = 0; j < cards.length; j++) {
    if(validateCred(cards[j]) === false) {
      invalidCard.push(cards[j])
      
    }
  }
  return invalidCard;
}

console.log(findInvalidCards(batch))

// Find companies of invalid credit card numbers. First digit is presented by different company.
// 3 - Amex, 4 - Visa, 5 - MasterCard, 6 - Discover, else - Company not found
const idInvalidCardCompanies = (company) => {
  let idInvalid = []
  for (let k = 0; k < company.length;k++) {
    if (company[k][0]===3) {
      idInvalid.push('Amex (american Express)')
    } else if (company[k][0]===4) {
       idInvalid.push('Visa')
    } else if (company[k][0]===5) {
       idInvalid.push('MasterCard')
    } else if (company[k][0]===6) {
       idInvalid.push('Discover')
    } else {
       idInvalid.push('Company not found')
    }
  }
  return idInvalid;

  }
console.log(idInvalidCardCompanies((findInvalidCards(batch))))







