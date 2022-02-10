import './style_card.css'
import {FaTrash} from 'react-icons/fa'


function Card({item, index, delItem}){
   


    return(

        <>
        {item.type === 'entrada' ? (
            < div className='card card_green'>
            <h2>{item.description}</h2>
            <span>R$ {item.value}</span>
            <button onClick={() => delItem(item)} ><FaTrash/></button>
            <p>{item.type}</p>
        </div>
        ):
        (
            <div  className='card card_gray'>
            <h2>{item.description}</h2>
            <span>R$ {item.value}</span>
            <button onClick={() => delItem(item)} ><FaTrash/></button>
            <p>{item.type}</p>
        </div>
        )}
        </>

    )

}

export default Card