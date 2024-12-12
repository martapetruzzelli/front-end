import { environment } from './environment.js';

const form = document.getElementById('create-form');

if(form){

    form.addEventListener('submit', e =>{
        e.preventDefault();

        const campi = document.getElementsByClassName('form-control');
        console.log(campi);
        const [specie, fiori, prezzo] = campi;
        console.log(specie, fiori, prezzo)

        const newPlant = {
            specie: specie.value,
            fiori: fiori.checked,
            prezzo: Number(prezzo.value),
        }

        addPlant(newPlant)
        .then(response=>{
            console.log(response);           
        })

    })

    async function addPlant(newPlant){
        
        try{
            const response = await fetch(environment.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPlant),
            })
            
            return response.json()
        }catch(error){
            console.log(error);
        }
        
    }

}