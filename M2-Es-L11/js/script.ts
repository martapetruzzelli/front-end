import { iPhotos } from './iphotos'

const baseUrl:string = 'https://jsonplaceholder.typicode.com';
            
async function getPhotos():Promise<void>{

    const target = <HTMLDivElement | null> document.querySelector('#target');

    try{ 
        const response:Response = await fetch(`${baseUrl}/photos`);

        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }

        const photos:iPhotos[] = await response.json();
                
        const photoSet:iPhotos[] = photos.slice(0,10);

        console.log(photoSet)

        photoSet.forEach(photo =>{
       
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

            const cloneTemplate = <HTMLTemplateElement | null> document.querySelector('template');

            if(!cloneTemplate) return

            const clone = <HTMLElement> cloneTemplate.content.cloneNode(true);

            const img = <HTMLImageElement | null> clone.querySelector('img');
            const title = <HTMLElement | null> clone.querySelector('.card-title');
            
            if(img && title){
                img.src = photo.thumbnailUrl;
                title.innerText = photo.title;
            }

            if(target){
                target.append(cloneTemplate);
            }
            else if(!target){
                return 'errore'
            }
               
            console.log(clone)
        })

    }catch(error){
                console.log(error);
    }

}

getPhotos()
        
