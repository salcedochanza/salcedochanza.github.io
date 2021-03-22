import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Exercice } from 'src/app/models/exercice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  exercice: Exercice;
  id: string;
  constructor(private firebd: FirebasedbService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          this.id = params['id'];
          this.firebd.getExercice(this.id).subscribe(
            (originalExercices: Exercice) => {
              this.exercice = originalExercices;
            }
          )
        } 
      }
    );
  }

  ngOnInit(): void {
  }

  updateExercice(){
    this.firebd.updateExercice(this.exercice, this.id);
  }
}
