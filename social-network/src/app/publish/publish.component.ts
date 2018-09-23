import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  publish: FormGroup;
  publishList$ :AngularFireList<any>; //esto es del tipo observable de firebase
  constructor(private formBuilder: FormBuilder, private database:AngularFireDatabase) { 
    this.createPublish(); 
    //hacemos una consulta a la base de datos
    this.publishList$ = this.database.list('/publish'); 
  }

  ngOnInit() {
  }

  createPublish() {
    this.publish = this.formBuilder.group({
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addPublish() { 
    const newPublish = { 
      image: this.publish.value.image,
      description: this.publish.value.description,
    };

    this.publishList$.push(newPublish);//esto agrega un nuevo post
    this.publish.reset();
  }

}
