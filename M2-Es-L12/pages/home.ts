import { iPlant } from "../interfaces/iPlant";
import { HttpClient } from "../Modules/Http.js";

class HomePage{

    http:HttpClient<iPlant>;

    apiUrl:string = ' http://localhost:3000/piante'

    plants:iPlant[] = [];
    target:HTMLElement | null

    constructor(){
        this.http = new HttpClient<iPlant>();
        this.target = document.querySelector('#target');
        this.getPlants()
    }

    async getPlants(){
        this.plants = await this.http.get(this.apiUrl)
        this.costruisciRighe()
    }

    costruisciRighe(){
        this.plants.forEach((p, i) => { 

            
            const tr:HTMLTableRowElement = document.createElement('tr');
            const idTd:HTMLTableCellElement = document.createElement('td');
            const specieTd:HTMLTableCellElement = document.createElement('td');
            const fioriTd:HTMLTableCellElement = document.createElement('td');
            const prezzoTd:HTMLTableCellElement = document.createElement('td');
            const azioniTd:HTMLTableCellElement = document.createElement('td');
            const deleteBtn:HTMLButtonElement = document.createElement('button');
            const editLink:HTMLAnchorElement = document.createElement('a');
    
            deleteBtn.classList.add('btn','btn-danger');
            editLink.classList.add('btn','btn-warning');
    
            idTd.innerText = String(i + 1);
            specieTd.innerText = p.specie;
            fioriTd.innerHTML = String(p.fiori);
            prezzoTd.innerText = p.prezzo + '€';
            deleteBtn.innerText = 'Elimina';
            editLink.innerText = 'Modifica';
    
            editLink.href = `/update.html?id=${p.id}`;
            
            deleteBtn.addEventListener('click',() => {
                this.http.delete(`${this.apiUrl}/${p.id}`)
                .then(() => {
                    tr.remove();
                })
            })
    
            azioniTd.append(editLink, deleteBtn);
            tr.append(idTd, specieTd, fioriTd, prezzoTd, azioniTd);
            
            this.target?.append(tr);
    
            })
    }

}

new HomePage()