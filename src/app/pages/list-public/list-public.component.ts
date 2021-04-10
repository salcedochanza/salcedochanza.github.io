import { Component, OnInit } from '@angular/core';
import { Exercice } from 'src/app/models/exercice';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-list-public',
  templateUrl: './list-public.component.html',
  styleUrls: ['./list-public.component.css']
})
export class ListPublicComponent implements OnInit {
  public exercices: Exercice[];
  
  constructor(private firebd: FirebasedbService,){
    this.firebd.getExercices().subscribe(
      (originalExercices: Exercice[]) => {
        this.exercices = originalExercices;
      }
    )
  }

  ngOnInit(): void {
  }

}
