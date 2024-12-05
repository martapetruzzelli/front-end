let icone = ['🐁','🐀','🐂','🐃','🐄','🐅','🐆','🐇'];

icone = [...icone, ...icone];
console.log(icone);

function shuffle(mazzo){
    let mazzoMescolato = [];

    while(mazzo.length){
        const rand = Math.floor(Math.random() * mazzo.length - 1) + 1;
        mazzoMescolato.push(mazzo[rand]);
        mazzo.splice(rand, 1);
    }

    return mazzoMescolato;

}

icone = shuffle(icone);
console.log(icone);



const memory = document.getElementById('memory')

icone.forEach((icona, i) => {

    const card = document.createElement('div');
    card.classList.add('card');
    card.addEventListener('click', show)
    card.id = 'card' + i;

    const iconBox = document.createElement('div');
    iconBox.classList.add('icon');
    iconBox.innerHTML = icona;

    card.append(iconBox);
    
    memory.append(card);

})

let check = [];

function show(e){

    const card = e.target;

   if(check.length < 2){

        card.classList.add('show')
        check.push(card);

    }else{

        if(check[0].innerHTML != check[1].innerHTML){
            
            check[0].classList.remove('show')
            check[1].classList.remove('show')
        }
        
        check = []
    }

    console.log(check);

}