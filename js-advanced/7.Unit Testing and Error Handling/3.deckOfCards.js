function printDeckOfCards(arr){
let result = [];
    for(let cardAsString of arr){
    let suit = cardAsString.slice(-1)
    let face = cardAsString.slice(0,-1);
    
    try{
    let card = cards(face, suit)
    result.push(card);
    }catch (err){
      result = ['Invalid card: ' + cardAsString];
    }
    
       
}

console.log(result.join(" "))
    function cards(face,suit){
       
        const faces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q','K', 'A',];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D' : '\u2666',
            'C' : '\u2663',
        }
       
        if(faces.indexOf(face) == -1){
            throw new Error('Invalid face' + face);
        }

        if(suits[suit] == undefined){
            throw new Error('Invalid suit' + suit);
        }
  
    const result = {
        face,
        suit: suits[suit],
        toString(){
            return this.face + this.suit
        }
    }
    return result;
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
