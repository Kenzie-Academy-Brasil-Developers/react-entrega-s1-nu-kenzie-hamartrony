import './reset.css'
import './App.css';
import { useState } from 'react';
import Nu_Kenzie from './images/Nu_Kenzie.png'
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import {CgBox} from 'react-icons/cg'



function App() {

                                                    // LISTA ORIGINAL
  const [gasto, setGasto] = useState([])  
  const [home, setHome] = useState(true)
  const [filtrados, setFiltrados] = useState([])
  const [filtro, setFiltro] = useState('todos')

  function iniciar(status){
    setHome(status)

  }  


   function addGasto(novo){                     // adiciona novos gastos a lista
      if(novo.description && novo.type && novo.value ){
        setGasto([...gasto, novo])

        }else{  
           alert("Dados incorretos!")
      } 
   } 



   function estado(text){                                       // filtro por type
    setFiltrados(gasto.filter((item) => item.type === text))
    setFiltro(text)
  }

   
  
   


   console.log(gasto)




  return (
    <div className="App">
     
    {home === true ? (
        <div className='home'>
          <div className='home_text'>
              <img src={Nu_Kenzie} alt=''></img>
              <h1>Centralize o controle das suas finanças</h1>
              <p>de forma rapida e segura</p>
              <button onClick={() => iniciar(false)}>Inicar</button>
          </div>
          <div className='figura'>
            <div className='div1'>
              <div className='div2'>
                <div className='div3'>
                  <div className='box1'>
                      <div className='botao1'></div>
                      <div className='botao2'></div>
                      <div className='botao3'></div>
                          <div className='card1'></div>
                          <div className='card2'></div>
                          <div className='card3'></div>
                          <div className='card4'></div>
                          <div className='card5'></div>
                          <div className='card6'></div>
                      <div className='box2'>
                          <div className='box_img'><CgBox/></div>
                          <div className='box_text1'></div>
                          <div className='box_text2'></div>

                          <div className='box3'>
                              <div className='box_img'><CgBox/></div>
                              <div className='box_text1'></div>
                              <div className='box_text2'></div>

                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    ):(
    <>
        <header>
            <img src={Nu_Kenzie} alt=''></img>
            <button onClick={()=> iniciar(true)}>Inicio</button>
        </header>
    
          <Form addGasto={addGasto}/>
          <List gasto={gasto} setGasto={setGasto} estado={estado} filtro={filtro} filtrados={filtrados}/>
          <TotalMoney gasto={gasto}/>
      
    </>
     )}
     </div>
  )
    
    
}

export default App;
