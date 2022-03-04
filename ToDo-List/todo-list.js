let dados = [
    {'tarefa': 'Estudar JS', 'status':''},
    {'tarefa': 'Dormir', 'status': 'checked'}
]


const criarItem = (tarefa, status) =>{
    const item = document.createElement('label')
    item.classList.add('todo--item')
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice>
        <div>${tarefa}</div>
        <input type="button" value="X">
        `
    document.getElementById("todoList").appendChild(item)
}

const limparTela = () => {
    const todoList = document.getElementById("todoList")
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}


const atualizarTela = () =>{
    limparTela()
    dados.forEach((item, indice) => criarItem(item.tarefa, item.status, indice))
}

const inserirItem = (evento) =>{
    const tecla = evento.key
    if(tecla === 'Enter'){
        dados.push({'tarefa': evento.target.value, 'status': 'checked'})
        atualizarTela()
        evento.target.value = ''
    }
}

const clickItem = (evento) =>{
    const item = evento.target
    console.log(item)
}


document.getElementById('newitem').addEventListener('keypress', inserirItem)
document.getElementById('todoList').addEventListener('click', clickItem)


atualizarTela()