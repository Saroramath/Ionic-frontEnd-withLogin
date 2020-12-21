import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent className="ion-padding">
      Page not found
      {/* Go to <IonRouterLink routerLink='/home'>Home</IonRouterLink> */}
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
