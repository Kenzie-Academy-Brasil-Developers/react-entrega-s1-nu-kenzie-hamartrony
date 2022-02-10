import { useState} from 'react'
import './form.css'

function Form ({addGasto}){

    const [novoGasto, setNovoGasto] = useState ({id:0})     // objeto com as informaçoes capturadas
    const [id, setId]               = useState (1)
  

    const descricao = ((e)=> {setNovoGasto({...novoGasto, description:e.target.value})})        // captura descricao
    const valor     = ((e)=> {setNovoGasto({...novoGasto, value:e.target.value})})              // captura valor
    const tipo      = ((e)=> {setNovoGasto({...novoGasto, type:e.target.value})})        // captura option type



    // FORMULARIO ADD GASTO
    return(
        
            <form>
                <label for='descricao'>Descrição</label>
                <input className='input_desc' type='text' placeholder="Digite aqui sua descrição"
                name='description' onChange={(e) => descricao(e)}></input>
                <span>Ex: Compra de roupas</span>


                <div className='div_valor'>
                    <label className='valor'>Valor</label>
                    <input className='input_preco' type='number' placeholder="R$" name='value' onChange={(e)=> valor(e)} ></input>


                    <label className='tipo'>Tipo de Valor</label>    
                    <select name="type" onClick={(e)=> tipo(e)} >
                        <option >Selecione</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saida</option>
                    </select>

                </div>
                <button type='button' onClick={() => {setNovoGasto({...novoGasto, id:id}); addGasto(novoGasto); setId(id + 1)}}>Inserir Valor</button>

        </form>

        
    )



}

export default Form