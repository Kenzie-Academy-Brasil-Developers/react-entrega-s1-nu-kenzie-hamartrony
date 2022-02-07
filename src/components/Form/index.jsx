import './form.css'

function Form ({listTransactoins, setListTransactions}){




    return(
        <form>
            <label for='descricao'>Descrição</label>
            <input className='input_desc' type='text' placeholder="Digite aqui sua descrição"></input>
            <span>Ex: Compra de roupas</span>
            <div className='div_valor'>
                <label className='valor'>Valor</label>
                <input className='input_preco' type='number'   placeholder="R$"></input>
                <label className='tipo'>Tipo de Valor</label>
                
                <select>
                    <label>Tipo de Valor</label>
                    <option>Entrada</option>
                    <option>Saida</option>
                </select>
            </div>
            <button>Inserir Valor</button>

        </form>



    )
}

export default Form