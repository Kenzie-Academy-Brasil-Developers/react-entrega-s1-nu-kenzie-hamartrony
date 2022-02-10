// import { useState } from "react"
import { useState } from "react";
import Card from "../Card"
import './style_list.css'

function List({gasto,filtro, filtrados, estado, setGasto}){

    function delItem(itemDel){
        const del = gasto.filter((item)=> item !== itemDel)
        setGasto(del)
    }



    return( 


    <div className="lista">
        <div className="header">
            <p>Resumo Financeiro</p>    
            <button     onClick={()=> estado('todos')}        type='button'   className="todos"          >Todos</button>
            <button     onClick={() => estado('entrada')}     type='button'   className="class"          >Entradas</button>
            <button     onClick={() => estado('saida')}       type='button'   className="class class2"   >Despesas</button>
        </div>


       
       
       { 
            filtro === 'todos' ? (
                    <div className="itens"> 
                        {gasto.length < 1 ? ( 
                            <>
                                <p className="vazio_p">Você ainda não possui nenhum lançamento</p>
                                <div className="vazio"> 
                                    <div></div>
                                    <div></div>                    
                                </div>
                                <div className="vazio"> 
                                    <div></div>
                                    <div></div>                    
                                </div>
                                <div className="vazio"> 
                                    <div></div>
                                    <div></div>                    
                                </div>
                            </>

                        ):(
                        
                            gasto.map((item, index) => <Card item={item} key={index}  delItem={delItem}/>)
                        )
                        }
                        
                    
                    </div>
   
            ):(
                <div className="itens"> 
                {filtrados.length < 1 ? ( 
                    <>
                        <p className="vazio_p">Você ainda não possui nenhum lançamento</p>
                        <div className="vazio"> 
                            <div></div>
                            <div></div>                    
                        </div>
                        <div className="vazio"> 
                            <div></div>
                            <div></div>                    
                        </div>
                        <div className="vazio"> 
                            <div></div>
                            <div></div>                    
                        </div>
                    </>

                ):(
                
                    filtrados.map((item, index) => <Card item={item} key={index} delItem={delItem}/>)
                )
                }
                
            
            </div>
            )  
        } 
    </div>
    )
}

export default List