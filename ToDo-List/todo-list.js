const getDados = () => JSON.parse(localStorage.getItem("todoList")) ?? []
const setDados = (dados) => localStorage.setItem("todoList", JSON.stringify(dados))

const criarItem = (tarefa, status, indice) =>{
    const item = document.createElement('label')
    item.classList.add('todo--item')
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
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
    const dados = getDados()
    dados.forEach((item, indice) => criarItem(item.tarefa, item.status, indice))
}

const inserirItem = (evento) =>{
    const tecla = evento.key
    if(tecla === 'Enter'){
        const dados = getDados()      
        dados.push({'tarefa': evento.target.value, 'status': ''})
        setDados(dados)
        atualizarTela()
        evento.target.value = ''
    }
}

const removerItem = (indice) =>{
    const dados = getDados()
    dados.splice(indice, 1)
    setDados(dados)
    atualizarTela()
}

const atualizarItem = (indice) =>{
    const dados = getDados()
    dados[indice].status = dados[indice].status === '' ? 'checked' : ''
    setDados(dados)
    atualizarTela()
}

const clickItem = (evento) =>{
    const item = evento.target
    if(item.type === 'button'){
        const indice = item.dataset.indice
        removerItem(indice)
    } else if(item.type === 'checkbox'){
        const indice = item.dataset.indice
        atualizarItem(indice)
    }
}


document.getElementById('newitem').addEventListener('keypress', inserirItem)
document.getElementById('todoList').addEventListener('click', clickItem)


atualizarTela()