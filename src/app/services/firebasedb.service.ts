import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Exercice } from '../models/exercice';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) {

  }

  getExercices(): Observable<Exercice[]> {
    return this.firestore.collection<Exercice>("exercices").valueChanges({idField: 'id'});
  }
  getExercice(id:string): Observable<Exercice> {
    return this.firestore.collection<Exercice>("exercices").doc(id).valueChanges();
  }
  createExercice(exercice: Exercice){
    this.firestore.collection("exercices").add({
      title: exercice.title,
      enunciat: exercice.enunciat,
      solucio: exercice.solucio,
      image: exercice.image,
      modul: exercice.modul
    })
  }

  updateExercice(exercice: Exercice, id: string){
    this.firestore.collection("exercices").doc(id).update({
      title: exercice.title,
      enunciat: exercice.enunciat,
      solucio: exercice.solucio,
      image: exercice.image,
      modul: exercice.modul
    })
  }

  deleteExercice(id:string){
    this.firestore.collection<Exercice>("exercices").doc(id).delete();
  }

  checkAllowedUser(email: string): Observable<any[]> {
    return this.firestore.collection("allowed_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref: any){
    return ref.where("email", "==", email);
  }
}
