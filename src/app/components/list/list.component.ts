import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AngularFireDatabase]
})
export class ListComponent implements OnInit {
  users: any;

// nos suscribimos a los cambios de la DB para recibir en tiempo real los cambios
  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router) {
   af.list('users').valueChanges().subscribe(
     users => {
       this.users = users;
     }
   );
  }

  ngOnInit() {
  }

  // para navegar a la pagina de añadir usuario
  goToAdd() {
    this.router.navigate(['add']);
  }
}
