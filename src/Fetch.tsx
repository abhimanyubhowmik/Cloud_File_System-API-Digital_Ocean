interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}


export async function httpGet(url: string){
    const response = await fetch(url);
    const body = await response.json();
    return body;
}

const data = await httpGet('https://jsonplaceholder.typicode.com/todos')