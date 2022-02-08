import './style_card.css'
import trash from '../../images/trash-solid.svg'
import {FaTrash} from 'react-icons/fa'


function Card({transaction, name, listTransactoins, delItem}){
 



    return(
        <div className='card'>
            <h2>{transaction.description}</h2>
            <span>R$ {transaction.value}</span>
            <button onClick={() => delItem(name)} ><FaTrash/></button>
            <p>{transaction.type}</p>
        </div>

    )


}

export default Card