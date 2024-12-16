export class HttpClient<T>{
     
    protected headers ={
        'content-Type':'application/json'
    }

    async get(url:string){
        const response = await fetch(url,{
            method: 'GET',
            headers: this.headers
        })

        if(!response.ok) throw new Error (`${response.status}`);

        return <Promise<T[]>> response.json();
    }

    async post(url:string, body:T){
        const response:Response = await fetch(url,{
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })

        if(!response.ok) throw new Error (`${response.status}`);

        return <Promise<T[]>> response.json();
    }

    async put(url:string, body:T){
        const response = await fetch(url,{
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(body)
        })

        if(!response.ok) throw new Error (`${response.status}`);

        return response.json();
    }

    async delete(url:string){
        const response = await fetch(url,{
            method: 'GET',
            headers: this.headers
        })

        if(!response.ok) throw new Error (`${response.status}`);

        return response.json();
    } 

}



