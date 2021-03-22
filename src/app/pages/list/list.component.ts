import { Component, OnInit } from '@angular/core';
import { Exercice } from 'src/app/models/exercice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public exercices: Exercice[];
  constructor(private firebd: FirebasedbService){
    this.firebd.getExercices().subscribe(
      (originalExercices: Exercice[]) => {
        this.exercices = originalExercices;
      }
    )
  }

  ngOnInit(): void {
  }

  deleteExercice(i: number){
    this.firebd.deleteExercice(this.exercices[i].id);
  }

}
