import Card from "../Card"
// import { useState } from "react"
import './style_list.css'

function List({listTransactoins, setFiltrados, filtrados, setListTransactions}){
    
    
    // FUNCAO FILTROS
    function filtroType(text){
        setFiltrados( text === 'todos' ? listTransactoins : listTransactoins.filter(item => item.type === text))
    
    }

    // FUNCAO DELETAR
    function delItem(name){
        const deleta = filtrados.filter(item => filtrados.indexOf(item) !== name)
        setFiltrados(deleta)
        setListTransactions(deleta)
       
   }
  

   
 

    return(
        
        <div className="lista">
            <div className="header">
                <p>Resumo Financeiro</p>
                <button onClick={() => filtroType('todos')} type='button' className="todos">Todos</button>
                <button onClick={() => filtroType('entrada')} type='button' className="class">Entradas</button>
                <button onClick={() => filtroType('saida')}   type='button' className="class class2">Despesas</button>
            </div>
            <div className="itens">
            
            {filtrados.map((transaction, index) => 
            <Card transaction={transaction} name={index} key={index} delItem={delItem}></Card>)}
            
            </div>

        </div>


    )
}

export default List