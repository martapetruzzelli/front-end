"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = 'https://jsonplaceholder.typicode.com';
function getPhotos() {
    return __awaiter(this, void 0, void 0, function* () {
        const target = document.querySelector('#target');
        try {
            const response = yield fetch(`${baseUrl}/photos`);
            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }
            const photos = yield response.json();
            const photoSet = photos.slice(0, 10);
            photoSet.forEach(photo => {
                const col = document.createElement('div');
                const card = document.createElement('div');
                const img = document.createElement('img');
                const title = document.createElement('div');
                const h5 = document.createElement('h3');
                col.classList.add('col-12', 'text-center', 'col-md-6', 'col-lg-3');
                card.classList.add('card', 'my-3');
                img.classList.add('card-img-top');
                title.classList.add('card-body');
                h5.classList.add('card-title');
                h5.innerText = photo.title;
                img.src = photo.thumbnailUrl;
                title.append(h5);
                card.append(img, title);
                col.append(card);
                if (target) {
                    target.appendChild(col);
                }
                // const cloneTemplate = <HTMLTemplateElement> document.querySelector('template');
                // const clone:Node = cloneTemplate.content.cloneNode(true);
                // if(cloneTemplate.querySelector('img') && cloneTemplate.querySelector('.card-title')){
                //     cloneTemplate.querySelector('img').src = photo.thumbnailUrl;
                //     cloneTemplate.querySelector('.card-title').innerText = photo.title;
                //     return
                // }
                // if(target){
                //     target.appendChild(cloneTemplate);
                // }
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
getPhotos();
//# sourceMappingURL=script.js.map