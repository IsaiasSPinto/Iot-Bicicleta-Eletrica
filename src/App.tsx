import React from 'react';
import { database } from './services/firebase';
import firebase from "firebase/app";

function App() {
  const LedStatus = ref(database, 'ledStatus/');
    onValue(LedStatus, (snapshot) => {
    const data = snapshot.val();

    update(ref(db, 'ledStatus/' ),{
      status : ! data.status
    })
});

  return (
   <h1>aaa</h1>
  );
}

export default App;
