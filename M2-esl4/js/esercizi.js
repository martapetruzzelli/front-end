const prodotti = [
    {   
        nome: "Laptop",  
        prezzo: 1200, 
        disponibile: true 
    },
    {   
        nome: "Smartphone", 
        prezzo: 800, 
        disponibile: false 
    },
    {   
        nome: "Tablet", 
        prezzo: 400, 
        disponibile: true 
    },
    {   
        nome: "Auricolari", 
        prezzo: 50, 
        disponibile: true 
    },
    {   
        nome: "Monitor", 
        prezzo: 300, 
        disponibile: false 
    },
    {   
        nome: "Mouse", 
        prezzo: 25,
        disponibile: true 
    },
];

        /* Esercizio 1
            Crea un nuovo array chiamato prodottiDisponibili contenente solo i prodotti che sono disponibili.
        */

        /* Esercizio 2
            Crea un nuovo array chiamato prodottiCostosi contenente solo i prodotti che costano più di 500 euro.
        */

        /* Esercizio 3
            Crea un nuovo array aggiungendo ad ogni oggetto la proprietà prezzoScontato contenente il prezzo scontato del 20%
        */

        /* Esercizio 4
            Elimina dall'array il prodotto "auricolari"
        */


// Es 1

let prodottiDisponibili = prodotti.filter (p => p.disponibile === true);

console.log(prodottiDisponibili);

// Es 2

let prodottiCostosi = prodotti.filter (p => p.prezzo >500);

console.log(prodottiCostosi);

// Es 3

let prodottiScontati = prodotti.map (p => {

    p.prezzoScontato = p.prezzo * 0.8;
    return p;

    });

console.log(prodottiScontati);

// Es 4

// let eliminaProdotto = prodotti.filter (p => p.nome != "Auricolari");

// console.log(eliminaProdotto);

let eliminaProdotto = prodotti;

eliminaProdotto.forEach((p, i)=>{

    let x = p.nome;

    if (x == "Auricolari"){
        eliminaProdotto.splice(i,1);
        }

    });

console.log(eliminaProdotto);
