document.addEventListener( 'DOMContentLoaded', () => {
	
    const buttonRoolDice = document.querySelector('.dice-roll');

const rollDice = () => {

    const diceSide = document.getElementById( 'dice-side-1' );
    const status = document.getElementById( 'status' );

    const side = Math.floor( Math.random() * 6 ) + 1;

    diceSide.innerHTML = side;

    status.innerHTML = '';

    if( side > 3) {
        status.innerHTML += 'This is the message A';
    } else{
        status.innerHTML += 'This is the message B';
    }
}

buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);