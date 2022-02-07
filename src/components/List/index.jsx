import Card from "../Card"

function List({listTransactoins}){
    console.log(listTransactoins)

    return(
        <div className="lista">
            
            {listTransactoins.map((transaction, index) => <Card transaction={transaction} key={index}></Card>)}


        </div>


    )
}

export default List