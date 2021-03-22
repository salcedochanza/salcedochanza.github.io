import { Component, OnInit } from '@angular/core';
import { Exercice } from 'src/app/models/exercice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public exerciceDetails: Exercice;
  constructor(private firebd: FirebasedbService) {
    this.exerciceDetails = new Exercice;
  }

  ngOnInit(): void {}

  createExercice(){
    console.log(this.exerciceDetails);
    this.firebd.createExercice(this.exerciceDetails);
  }
}
