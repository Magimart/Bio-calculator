import {
  IonApp,
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import HomePage from './components/mainComponents/HomePage';



function App() {

  const [name, setName] = useState("");
 

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
             value={name}
             onIonChange={(e) => setName(e.detail.value)}
          />
        </IonItem> 
        <IonItem>
                <IonLabel position="stacked"> Data of Birth: </IonLabel>
                <IonDatetime displayFormat=" D MMM YYYY"/>
         </IonItem>      
            <p>Name: {name}</p>
           {/* home */}
      </IonContent>
    </IonApp>
  );
}

export default App;





// import './App.css';
// import React, { useEffect, useState } from 'react';
// import Header from './components/headerComponents/Header';
// import { Route, Switch } from "react-router-dom";
// import './styles/main.css';
// import HomePage from './components/mainComponents/HomePage';
// import NumbersPage from './components/mainComponents/Numbers';
// import  data   from "./data.json"
// import LettersPage from './components/mainComponents/Letters';

    
//     function App(props) {
    
//       //  const [ res, setRes] = useState([])
//        const [ countNumbers, setCountNumbers] = useState([])
//        const [ wordLetters, setWordLetters] = useState([])




//          useEffect(async() => {

//               const [nums, letter] = data;
//               const  {learnNumbers, counts} = nums;
//               const {learnLetters, letters} =letter

//            setCountNumbers(counts);
//            setWordLetters(letters)

//           }, [countNumbers, wordLetters])

//         console.log(data)


//       return (
//         <React.Fragment>
//         <div className="App">
//               <div  className="AppWrapp">
//                  <Switch> 
//                     <Route
//                          exact path={"/learning/letters"}
//                          render={() => <LettersPage wordLetters={wordLetters} {...props} />   }
//                       />  
//                       <Route
//                          exact path={"/learning/numbers"}
//                          render={() => <NumbersPage countNumbers={countNumbers} {...props} />   }
//                       />                
//                         <Route 
//                            path="/"
//                            render={() => <HomePage/> }
//                         />
//                     </Switch>
//               </div>
//         </div>
//       </React.Fragment>
//       );
//     }
    
//     export default App;
    
    
    
    
    





