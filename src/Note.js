import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export default function Note() {
  const colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'dark']
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <IonCard color={color}>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <p>
          <b>
            Keep close to Nature's heart... and break clear away, once in awhile
          </b>
        </p>

        <IonLabel>Edited 7:45pm on 17.05.2021</IonLabel>
      </IonCardContent>

    </IonCard>
  )
}