import { database } from './services/firebase';
import { ref, set} from "firebase/database";
import { useState } from 'react';
import './styles/globalstyles.css'





function App() {

  
  const [ledOn, setLedOn] = useState(0)


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

    <button style={ledOn == 1 ? redStyle : greenStyle } className="botaoPipoqueira" onClick={checkDb}>{ledOn == 1 ? "Pipoqueira Desligada" : "Pipoqueira Ligada"}</button>

  );
}

export default App;
