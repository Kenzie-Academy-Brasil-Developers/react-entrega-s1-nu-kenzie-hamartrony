
import "./style_total.css"


function TotalMoney({gasto}){

     const entr  = gasto.filter(item => item.type === "entrada") 
    //  const saida = gasto.filter(item => item.type === "saida") 
     
        


    const totalEntradas = entr.reduce((acum, atual) => acum + Number(atual.value), 0)
    // const totalSaidas   = saida.reduce((acum, atual) => acum + Number(atual.value), 0)
    // const total = totalEntradas - totalSaidas 


    return(
        <div className="total">
            <p>Valor Total:</p>
            <p className="preco">R$ {totalEntradas}</p>
            <span>O valor se refere as entradas</span>
        </div>
    )
}


export default TotalMoney