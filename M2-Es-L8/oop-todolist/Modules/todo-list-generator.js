export class TodoList{

    constructor(selector){

        this.target = document.querySelector(selector);
        this.input = document.createElement('input');
        this.error = document.createElement('div');
        this.button = document.createElement('button');
        this.list = document.createElement('div');
        this.initHTML();

    }

    initHTML(){

        this.input.placeholder = 'inserisci il testo';
        this.input.type = 'text';
        this.input.classList.add('form-control');

        this.button.innerText = 'Crea';
        this.button.classList.add('btn', 'btn-primary');
        this.button.addEventListener('click', () => {
            if(!this.input.value){
                this.input.nextElementSibling.innerText = 'Valore mancante';
                this.input.classList.add('border-danger');
            }else{
                this.input.nextElementSibling.innerText = '';
                this.input.classList.remove('border-danger');
                this.addTodo();
            }
        })

        this.target.append(this.input, this.error, this.button, this.list);

    }

    addTodo(){
        const newTodo = document.createElement('div');
        const deleteButton = document.createElement('button');

        newTodo.innerText = this.input.value;
        newTodo.classList.add('alert', 'alert-success');

        deleteButton.innerText = 'Elimina';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', ()=>{
            this.deleteTodo(newTodo);
        })

        newTodo.append(deleteButton);
        this.list.append(newTodo);

        this.input.value = "";

    }

    deleteTodo(todoElement){
        todoElement.remove()
    }

}