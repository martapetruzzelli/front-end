
/* Esercizio
    Ciclando l'array popola la pagina di card html.
    Puoi utilizzare Bootstrap per essere più valoce.
    Assegna colori diversi ai prodotti non disponibili.
*/
const prodotti = [
    { nome: "Laptop", prezzo: 1200, disponibile: true },
    { nome: "Smartphone", prezzo: 800, disponibile: false },
    { nome: "Tablet", prezzo: 400, disponibile: true },
    { nome: "Auricolari", prezzo: 50, disponibile: true },
    { nome: "Monitor", prezzo: 300, disponibile: false },
    { nome: "Mouse", prezzo: 25, disponibile: true },
];

document.getElementById('target').className = "container";

let row = document.createElement('div');
row.classList.add("row");
row.className += " justify-content-center p-2";
target.append(row);


for ( let prodotto of prodotti){
    let card = document.createElement('div');
    card.className += "bg-primary text-white text-center card mx-1 my-3 py-5 col-12 col-md-6 col-lg-4 flex-grow-1";
    card.innerText = prodotto.nome + " : " + prodotto.prezzo + "€";

    if(!prodotto.disponibile){
        card.classList.remove("text-white");
        card.classList.remove("bg-primary");
        card.className += " bg-black text-danger"
    }
    row.append(card);
}


