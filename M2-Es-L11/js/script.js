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
                throw new Error(`Response status: ${response.status}`);
            }
            const photos = yield response.json();
            const photoSet = photos.slice(0, 10);
            console.log(photoSet);
            photoSet.forEach(photo => {
                // const col:HTMLDivElement = document.createElement('div');
                // const card:HTMLDivElement = document.createElement('div');
                // const img:HTMLImageElement = document.createElement('img');
                // const title:HTMLDivElement = document.createElement('div');
                // const h5:HTMLHeadingElement = document.createElement('h3');
                // col.classList.add('col-12', 'text-center', 'col-md-6', 'col-lg-3');
                // card.classList.add('card', 'my-3');
                // img.classList.add('card-img-top');
                // title.classList.add('card-body');
                // h5.classList.add('card-title');
                // h5.innerText = photo.title;
                // img.src = photo.thumbnailUrl;
                // title.append(h5);
                // card.append(img, title);
                // col.append(card);
                // if(target){
                //     target.appendChild(col);
                // }
                const cloneTemplate = document.querySelector('template');
                if (!cloneTemplate)
                    return;
                const clone = cloneTemplate.content.cloneNode(true);
                const img = clone.querySelector('img');
                const title = clone.querySelector('.card-title');
                if (img && title) {
                    img.src = photo.thumbnailUrl;
                    title.innerText = photo.title;
                }
                if (target) {
                    target.append(cloneTemplate);
                }
                else if (!target) {
                    return 'errore';
                }
                console.log(clone);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
getPhotos();
export {};
//# sourceMappingURL=script.js.map