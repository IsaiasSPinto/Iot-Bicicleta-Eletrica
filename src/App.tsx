import { database } from './services/firebase';
import { ref, set} from "firebase/database";
import { useState } from 'react';


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

  return (
    <>
      <button onClick={checkDb}>aaa</button>
    </>
  );
}

export default App;
