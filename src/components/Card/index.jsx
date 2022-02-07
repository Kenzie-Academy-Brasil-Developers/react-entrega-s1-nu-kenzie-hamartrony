function Card({transaction, index}){
    console.log(transaction)


    return(
        <div>
            <h2>{transaction.description}</h2>
            <span>{transaction.value}</span>
            <button></button>
            <p>{transaction.type}</p>
        </div>

    )


}

export default Card