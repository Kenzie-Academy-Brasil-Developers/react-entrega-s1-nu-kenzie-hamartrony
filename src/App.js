import './reset.css'
import './App.css';
import { useState } from 'react';
import Nu_Kenzie from './images/Nu_Kenzie.png'
import Form from './components/Form';
import List from './components/List';

function App() {
 
  const [listTransactoins, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])



  return (
  
    <div className="App">
      <header>
        <img src={Nu_Kenzie} alt=''></img>
        <button>Inicio</button>
      </header>

      <Form></Form>
      <List listTransactoins={listTransactoins}/>
  
    </div>
  );
}

export default App;
