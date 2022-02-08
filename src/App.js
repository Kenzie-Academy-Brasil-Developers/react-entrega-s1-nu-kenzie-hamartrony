import './reset.css'
import './App.css';
import { useState } from 'react';
import Nu_Kenzie from './images/Nu_Kenzie.png'
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';


function App() {
 
  const [listTransactoins, setListTransactions] = useState([            // lista
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saida", value: 150 },
  ])

  const [filtrados, setFiltrados] = useState(listTransactoins)          // filtros







  return (
    
  
    <div className="App">
      <header>
        <img src={Nu_Kenzie} alt=''></img>
        <button>Inicio</button>
      </header>

      <Form listTransactoins={listTransactoins} setListTransactions={setListTransactions} setFiltrados={setFiltrados} filtrados={filtrados}></Form>
      <TotalMoney listTransactoins={listTransactoins}/>
      <List listTransactoins={listTransactoins} filtrados={filtrados} setFiltrados={setFiltrados} setListTransactions={setListTransactions}/>
  
    </div>
  );
}

export default App;
