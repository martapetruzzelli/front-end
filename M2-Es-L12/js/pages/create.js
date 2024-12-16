var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HttpClient } from '../Modules/Http.js';
class Create {
    constructor() {
        this.form = document.getElementById('create-form');
        this.apiUrl = 'http://localhost:3000/piante';
        this.plants = [];
        this.http = new HttpClient();
        this.postPlant();
    }
    if(form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const fields = document.querySelectorAll('#create-form input');
            const [specie, fiori, prezzo] = fields;
            const newPlant = {
                specie: specie.value,
                fiori: fiori.checked,
                prezzo: Number(prezzo.value)
            };
            postPlant()
                .then(plantResponse => {
                console.log(plantResponse);
            });
        });
        function postPlant() {
            return __awaiter(this, void 0, void 0, function* () {
                this.plants = yield this.http.post(this.apiUrl, newPlant, (Partial));
            });
        }
    }
}
new Create();
//# sourceMappingURL=create.js.map