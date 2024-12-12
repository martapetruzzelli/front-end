

const baseUrl:string = 'https://jsonplaceholder.typicode.com';
            
async function getPhotos():Promise<void>{

    const target = <HTMLDivElement> document.querySelector('#target');

    try{ 
        const response:Response = await fetch(`${baseUrl}/photos`);

        if(!response.ok){
            throw new Error('Errore nella richiesta')
        }

        interface iPhotos{
            albumId:number;
            id:number;
            title:string;
            url:string;
            thumbnailUrl:string;
        }

        const photos:iPhotos[] = await response.json();
                
        const photoSet:iPhotos[] = photos.slice(0,10);


        photoSet.forEach(photo =>{

                    
            const col:HTMLDivElement = document.createElement('div');
            const card:HTMLDivElement = document.createElement('div');
            const img:HTMLImageElement = document.createElement('img');
            const title:HTMLDivElement = document.createElement('div');
            const h5:HTMLHeadingElement = document.createElement('h3');

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

            if(target){
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
                        
        })

    }catch(error){
                console.log(error);
    }

}

getPhotos()
        
