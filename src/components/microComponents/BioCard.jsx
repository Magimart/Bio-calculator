import {
        IonCard, IonCardTitle, IonContent 
      } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';  
  
  function BioCard({targetDate}) {
  
      const formateDate = (isoString) => {
          return dayjs(isoString).format("DD MMM YYYY")

      }
  
   
  
    return (     
             
                <IonCard  targetDate={targetDate}>
                     <IonContent>
                        <IonCardTitle><p>{formateDate(targetDate)}</p></IonCardTitle> 
                        <IonCardTitle><p>Emotional: 10%</p></IonCardTitle> 
                        <IonCardTitle><p>Intelligent: 20%</p></IonCardTitle> 
                     </IonContent>
                </IonCard>      
        );
  }
  
  export default BioCard;