import {
  IonApp,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import BioCard from './components/microComponents/BioCard';



function App() {

  // const [name, setName] = useState("");
  const [ dateOfBirth, setDateOfBirth] = useState("")
  const targetDate = new Date().toISOString()

 

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bio Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel  position="stacked">Name: </IonLabel>
          <IonInput
             value={dateOfBirth}
             onIonChange={(event) => setDateOfBirth(event.detail.value)}
          />
        </IonItem> 
        <IonItem>
                <IonLabel position="stacked"> Data of Birth: </IonLabel>
                <IonDatetime displayFormat="DD MMM YYYY"/>
         </IonItem>      
                       {/* card*/}
                      <BioCard targetDate={targetDate}/>      
      </IonContent>
    </IonApp>
  );
}

export default App;



