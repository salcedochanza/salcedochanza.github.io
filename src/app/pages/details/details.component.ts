import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Exercice } from 'src/app/models/exercice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public exercice: Exercice;
  constructor(private firebd: FirebasedbService, private activatedRoute: ActivatedRoute){
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.firebd.getExercice(id).subscribe(
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

}
