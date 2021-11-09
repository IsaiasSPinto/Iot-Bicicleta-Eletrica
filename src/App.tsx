import { database } from './services/firebase';
import { ref, set} from "firebase/database";
import { useState } from 'react';
import './globalStyles.css'
import './styles/app.css'
import logo from './assets/images/marcopolo-logo.png'





function App() {

  
  const [ledOn, setLedOn] = useState(1)


  function checkDb(){

    if(ledOn == 1){
      set(ref(database, 'ledStatus'), {
        led : 0
      })
      setLedOn(0)
    }

    if(ledOn == 0) {
      set(ref(database, 'ledStatus'), {
        led : 1
      })

      setLedOn(1)
    }

  }

  const redStyle = {
    backgroundColor: 'red'
  }

  const greenStyle = {
    backgroundColor: 'green'
  }

  return (
    <>
      <header className="header">
        <img src={logo} />
      </header>

      <main className="first-content">
        <h1>Feira de trabalhos <br /> EFPM 2021</h1>
        <div className="bike-section">
          <h2>Bicicleta Eletrica</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti blanditiis rem ipsum iste inventore magnam quos nam similique cupiditate ullam corporis, velit nesciunt asperiores nemo! Minima in perspiciatis provident nesciunt?</span>
          {/* <img src="" alt="" /> */}
        </div>
      </main>
      <section className="second-content">
        <div className="energy-section">
          <h2>Energia Limpa</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem velit labore delectus voluptatum beatae maiores. Neque, explicabo? Laborum, neque eos recusandae nulla eligendi ipsam. Blanditiis asperiores deserunt atque ducimus aspernatur.</span>
          {/* <img src="" alt="" /> */}
        </div>
      </section> 
      <div className="button"> 
        <button style={ledOn == 1 ? redStyle : greenStyle } className="botaoPipoqueira" onClick={checkDb}>{ledOn == 1 ? "Pipoqueira Desligada" : "Pipoqueira Ligada"}</button>
      </div>

      <footer className="footer">
        <span>Trabalho feito por...</span>
      </footer>
      
    </>
  );
}

export default App;
