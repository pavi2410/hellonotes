import { IonPage, IonHeader, IonContent, IonToolbar, IonRow, IonCol, IonLabel, IonButtons, IonButton, IonIcon, IonFab, IonFabButton, IonChip, IonGrid } from '@ionic/react'
import { personCircle, search, ellipsisHorizontal, ellipsisVertical, logoIonic, pencil, filter } from 'ionicons/icons'
import Note from './Note'

export default function HomePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" icon={logoIonic} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={personCircle} />
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={search} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton color="secondary">
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <section>
          <IonChip>
            <IonIcon icon={filter} />
            <IonLabel>Topic</IonLabel>
          </IonChip>
          <IonChip>
            <IonIcon icon={filter} />
            <IonLabel>Sort</IonLabel>
          </IonChip>
        </section>

        <IonGrid>
        {
            Array(4).fill(0).map(_ => <IonRow><IonCol><Note /></IonCol><IonCol><Note /></IonCol></IonRow>)
        }
        </IonGrid>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          {/* Fix the position */}
          <IonButton shape="round" style={{ '--padding-top': '1.5rem', '--padding-bottom': '1.5rem' }}>
            <IonIcon icon={pencil} slot="start" />
            <IonLabel>WRITE</IonLabel>
          </IonButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}