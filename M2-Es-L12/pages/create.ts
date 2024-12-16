import { iPlant } from '../interfaces/iPlant';
import { HttpClient } from '../Modules/Http.js';

class Create{

    form = <HTMLFormElement | null> document.getElementById('create-form');

    http:HttpClient<iPlant>;
    apiUrl:string = 'http://localhost:3000/piante'

    plants:iPlant[] = [];

    constructor(){
        this.http = new HttpClient<iPlant>();
        this.postPlant()
    }


    

    if(form:HTMLFormElement){
            form.addEventListener('submit', e => {
                e.preventDefault();

                const fields = document.querySelectorAll<HTMLInputElement>('#create-form input');
                const [specie,fiori, prezzo] = fields

                const newPlant:Partial<iPlant> = {
                    specie: specie.value,
                    fiori: fiori.checked,
                    prezzo: Number(prezzo.value)
                }

                postPlant()
                .then(plantResponse=>{
                    console.log(plantResponse);
                })
                
            })
  
        async function postPlant(){
            this.plants = await this.http.post(this.apiUrl, newPlant:Partial<iPlant>)
        }
    }
}

new Create()