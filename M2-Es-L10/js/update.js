import { environment } from './environment.js';

const form =  document.getElementById('edit-form');
const specie =  document.getElementById('specie');
const fiori = document.getElementById('fioricheck');
const prezzo = document.getElementById('prezzo');

async function init(){

    const url = new URLSearchParams(location.search);

    if(!url.has('id')){
         location.href = '/index.html'
         return
    }

    const id = url.get('id')

    const plant = await getPlantById(id);

    specie.value = plant.specie;
    fiori.value = plant.fiori;
    prezzo.value = plant.prezzo;


    form.addEventListener('submit', e => {
        e.preventDefault();

        const plant = {
            id,
            specie: specie.value,
            fiori: fiori.value,
            prezzo: prezzo.value
        }

        updatePlant(plant)
        .then(()=>{
            alert('pianta modificata con successo');
        })

    })

}

async function getPlantById(id){
    const response = await fetch(`${environment.apiUrl}/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.json();
}

async function updatePlant(plant){
    const response = await fetch(`${environment.apiUrl}/${plant.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plant)
    })

    return response.json();
}