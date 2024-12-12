import { environment } from './environment.js';

async function getPlant(){

    const response = await fetch(environment.apiUrl, {
        method: 'GET',
        headers: { 'Content-type': 'application/json'}
    })

    return response.json()
}

async function plantTable(){
    const target = document.querySelector('#target');
    const plants = await getPlant();

    plants.forEach((p, i) => {

        const tr = document.createElement('tr');
        const idTd = document.createElement('td');
        const specieTd = document.createElement('td');
        const fioriTd = document.createElement('td');
        const prezzoTd = document.createElement('td');
        const azioniTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        const editLink = document.createElement('a');

        deleteBtn.classList.add('btn','btn-danger');
        editLink.classList.add('btn','btn-warning');

        idTd.innerText = i + 1;
        specieTd.innerText = p.specie;
        fioriTd.innerHTML = p.fiori;
        prezzoTd.innerText = p.prezzo + '€';
        deleteBtn.innerText = 'Elimina';
        editLink.innerText = 'Modifica';

        deleteBtn.addEventListener('click',() => {
            deletePlant(p.id)
            .then(() => {
                tr.remove();
            })
        })
        editLink.href = `/update.html?id=${p.id}`;

        azioniTd.append(editLink, deleteBtn);
        tr.append(idTd, specieTd, fioriTd, prezzoTd, azioniTd);
        target.appendChild(tr)

    })

}

plantTable();

async function deletePlant(id){

    try{
        const response = await fetch(`${environment.apiUrl}/${id}`,{
            method:'DELETE'
        });
        
        return response.json()
    }catch(error){
        
    }
}